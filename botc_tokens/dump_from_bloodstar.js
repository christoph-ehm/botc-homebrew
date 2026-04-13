import fs from 'node:fs'
import path from 'node:path'

const character_destination_path = `./inputs/%home_script`  // `./inputs/%home_script/%type`
const icon_file_path_pattern = `../../icons/%icon`
await main(process.argv)

function write_file(filepath, content, options)
{
	return new Promise((resolve, reject) => {
		fs.writeFile(filepath, content, { ...options, flag: "w" }, (error_message) => {
			if (error_message)
				reject(error_message)
			resolve(content)
		})
	}).catch((error_message) => console.error(filepath, options, error_message))
}

async function main(cli_arguments)
{
	preprocess_cli_arguments(cli_arguments)

	if (cli_arguments.length <= 0)
	{
		console.log(`
usage:
	dump_from_bloodstar images ‹directory with token jsons›
	dump_from_bloodstar [‹command›] ‹files/urls›…

needs at least 1 command line argument, the url string to download from. Optionally the command name: \"images\", \"json\", \"all\"
`)
		process.exit(-1)
	}

	let paths
	let command_string
	let character_list_map

	switch(cli_arguments[0])
	{
		case "images":
			console.assert(cli_arguments.length >= 2);

			paths = [ cli_arguments[1] ];
			command_string = "images";
			character_list_map = await load_character_list_map_from_directory(paths[0]);
			await write_character_icons_of_map(character_list_map)
			break;
		
		case "json":
			paths = cli_arguments.slice(1);
			command_string = "json";
			character_list_map = await load_character_list_map(paths);
			await write_characters_to_directories(character_list_map, true)
			break;
		
		case "all":
			paths = cli_arguments.slice(1);
			command_string = "all";
			character_list_map = await load_character_list_map(paths);
			await write_characters_to_directories(character_list_map, true);
			await write_character_icons_of_map(character_list_map)
			break;
		
		default:
			paths = cli_arguments;
			command_string = "all";
			character_list_map = await load_character_list_map(paths);
			await write_characters_to_directories(character_list_map, true);
			await write_character_icons_of_map(character_list_map)
			break;
	}
}

function preprocess_cli_arguments(cli_arguments)
{
	cli_arguments.shift()

	if (cli_arguments[0]?.endsWith(".js"))
	{
		cli_arguments.shift()
	}
}

async function load_character_list_map(paths, load_from_path_function = load_character_list_json)
{
	let promised_character_lists = paths.map(load_from_path_function);
	let character_lists_result = await Promise.allSettled(promised_character_lists);
	let character_lists = get_values_of_settled_results(character_lists_result)

	let map_entries = character_lists.map( character_list => [ character_list[0].home_script, character_list ] );
	let character_list_map = new Map( map_entries );
	return character_list_map;
}

function get_values_of_settled_results(settled_results)
{
	return settled_results.filter(result => result.status == "fulfilled").map(result => result.value);
}

async function load_character_list_json(address_string)
{
	let is_url = check_is_url(address_string)
	let promised_character_list_string = is_url? get_json_file_contents_from_url(address_string) : get_json_file_contents_from_filepath(address_string);
	let character_list = JSON.parse(await promised_character_list_string);
	character_list = character_list.filter(is_valid_character)

	let character_list_name = extract_character_list_name(character_list);
	set_character_list_name_to_each_character(character_list, character_list_name);

	update_characters_for_botc_tokens(character_list);

	return character_list;
}

function check_is_url(address_string)
{
	if (address_string.startsWith("http"))
		return true

	return false
}

async function get_json_file_contents_from_url(url_string)
{
	let http_response = await fetch(url_string);
	if (!http_response.ok)
	{
		console.error("Script ", url_string, " returned response ", http_response.status)
		return []
	}

	let character_list_string = await http_response.json()
	return character_list_string
}

function get_json_file_contents_from_filepath(filepath)
{
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, "utf8", (error_message, data) => {
			if (error_message)
			{
				reject(error_message);
			}
			resolve(data);
		})
	});
}

function is_valid_character(character)
{
	if (character.team != "jinxes")
		return true;

	if (!Object.hasOwn(character, "image"))
		return false;

	return true;
}

function extract_character_list_name(character_list)
{
	console.assert(character_list.length > 0)
	console.assert(Object.hasOwn(character_list[0], "almanac"))

	let almanac_url_string = character_list[0].almanac;
	let character_list_name = almanac_url_string.replace(/^.*\/([^\/]*)\/[^\/]*$/, "$1");
	character_list_name = character_list_name.replaceAll(/[^\w\d]/g, "");
	return character_list_name
}

function set_character_list_name_to_each_character(character_list, character_list_name_string)
{
	for (let character of character_list)
	{
		character.home_script = character_list_name_string
	}
}

function update_characters_for_botc_tokens(character_list)
{
	for (let character of character_list.slice(1))
	{
		if (!Object.hasOwn(character, "team"))
			continue;
		
		let character_team = (character.team != "jinxes")? character.team : "loric";

		character.type = (character.team != "jinxes")? character.team : "fabled";
		delete character.team;

		character.image = (Object.hasOwn(character, "image"))? character.image : getFallbackImageUrl(character_team);
		character.icon = get_icon_file_path(character);

		character.affects_setup = Boolean(character.setup);
		delete character.setup;

		character.first_night = Object.hasOwn(character, "firstNightReminder");
		character.other_nights = Object.hasOwn(character, "otherNightReminder");
		delete character.firstNight;
		delete character.firstNightReminder;
		delete character.otherNight;
		delete character.otherNightReminder;

		character.reminders ??= []
	}
}

// copied from my browser extension
function getFallbackImageUrl(teamName)
{
	return `/src/assets/icons/generic/${teamName}.webp`;  //formerly …/icons/Generic_${teamname}.webp
}

function is_json_file(file_dirent)
{
	if (!file_dirent.isFile())
		return false;

	if (!file_dirent.name.endsWith(".json"))
		return false;

	return true;
}

function is_output_file(file_dirent)
{
	if (!file_dirent.isFile())
		return false;

	if (file_dirent.name.endsWith(".json"))
		return true;

	if (file_dirent.name.endsWith(".png"))
		return true;

	if (file_dirent.name.endsWith(".webp"))
		return true;

	return false;
}

function get_filepaths_in_directory(directory_path, include_images = false)
{
	let files = fs.readdirSync(directory_path, { withFileTypes: true, recursive: false }).filter(include_images? is_output_file : is_json_file)
	let file_paths = files.map((file) => path.join(directory_path, file.name))
	return file_paths
}

function load_character_list_map_from_directory(directory_path)
{
	let json_file_paths = get_filepaths_in_directory(directory_path)
	let characters = json_file_paths.map((file_path) => JSON.parse(fs.readFileSync(file_path, "utf8")) )

	let character_list_map = new Map()
	for (let character of characters)
	{
		if (!character.home_script)
		{
			continue
		}
		
		if (!character_list_map.has(character.home_script))
			character_list_map.set(character.home_script, []);

		character_list_map.get(character.home_script).push(character);
	}

	return character_list_map
}

function get_character_directory_path({ home_script, type = "" })
{
	let directory_path = character_destination_path
			.replace("%home_script", home_script)
			.replace("%type", type);
	
	return directory_path
}

async function write_characters_to_directories(character_list_map, include_images = false)
{
	for (let home_script of character_list_map.keys())
	{
		let directory_path = get_character_directory_path({ home_script })
		let filepaths = get_filepaths_in_directory(directory_path, include_images)
		
		filepaths.forEach(fs.unlinkSync)
		//await remove_existing_character_files(filepaths)
		await write_list_of_characters(character_list_map.get(home_script))
	}
}

async function remove_existing_character_files(filepaths)
{
	let promised_removes = filepaths.map(remove_character_file)
	let result = await Promise.allSettled(promised_removes)
}

function remove_character_file(filepath)
{
	return new Promise((resolve, reject) => {
		fs.unlink(filepath, (error_message) => {
			if (error_message)
				reject(filepath, error_message);
			resolve(filepath)
		})
	})
}

async function write_list_of_characters(character_list)
{
	let promised_writes = character_list.slice(1).map(write_character_to_file)
	let result = await Promise.allSettled(promised_writes)
	
	let json_contents = get_values_of_settled_results(result)
	return json_contents
}

function write_character_to_file(character)
{
	let destination_path = get_character_directory_path(character)
	let character_name = character.id.replace(/_.*$/, "")
	let filename = character_name + ".json"
	let filepath = path.join(destination_path, filename)
	
	let json_content = JSON.stringify(character);
	fs.writeFileSync(filepath, json_content, { encoding: 'utf8', flag: "w" });
	//return write_file(filepath, json_content, { encoding: 'utf8', });
}

async function write_character_icons_of_map(character_list_map)
{
	for (let character_list of character_list_map.values())
	{
		await write_character_icons_from_urls(character_list)
	}
}

async function write_character_icons_from_urls(character_list, synchronous = true)
{
	let characters = character_list.slice(1);
	if (synchronous)
	{
		let result = []

		for (let character of characters)
		{
			let image_data = await write_character_icon_to_file(character);
			result.push(image_data);
		}

		return result;
	}

	let promised_writes = characters.map(write_character_icon_to_file);
	let result = await Promise.allSettled(promised_writes);

	let image_data = get_values_of_settled_results(result);
	return image_data;
}

async function write_character_icon_to_file(character)
{
	let target_directory = get_character_directory_path(character);
	let destination_path = path.join(target_directory, character.icon);

	let is_url = check_is_url(character.image);
	let promised_image_data = (is_url)? load_image_file_from_url(character.image) : load_image_file_from_filepath(character.image);
	let image_data = await promised_image_data

	//fs.writeFileSync(destination_path, image_data, { flag: "w" });
	return write_file(destination_path, image_data);
}

function get_icon_file_path(character)
{
	let file_name = get_icon_file_name(character);
	let icon_file_path = icon_file_path_pattern.replace("%icon", file_name);
	return icon_file_path;
}

function get_icon_file_name(character)
{
	let file_name = character.image;
	let file_name_start_position = file_name.lastIndexOf("/");
	
	if (file_name_start_position >= 0)
		file_name = file_name.substring(file_name_start_position+1);

	return file_name;
}

async function load_image_file_from_filepath(filepath)
{
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, (error_message, file_data) => {
			if (error_message)
			{
				reject(error_message);
			}
			resolve(file_data)
		})
	})
}

async function load_image_file_from_url(url_string)
{
	let http_response = await fetch(url_string)
	let byte_data = await http_response.arrayBuffer()
	let node_buffer = Buffer.from(byte_data)
	return node_buffer
}
