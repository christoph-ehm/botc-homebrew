#!/bin/bash

author="Christoph"
token_directory="./tokens"
scripttool_json_path="../BotC_Script_Casual_on_the_Homebrewer_auto.json"
output_script_directory="casual-on-the-homebrewer"
#scripttool_json_path="../BotC_Script_Beginner's_101_auto.json"
#output_script_directory="beginners-101"
grouping_config_file="printable_script.json"
botc_tokens="botc_tokens"

declare -i is_extracting_jsons_from_bloodstar_json
declare -i is_only_extracting_from_bloodstar
declare -i is_removing_generated_tokens
declare -i is_botc_tokens_create
declare -i is_adding_subdirectory
declare -i is_botc_tokens_group
declare -i is_generating_group_config

case "$1" in
	"--extract-bloodstar")
		is_extracting_jsons_from_bloodstar_json=1
		is_only_extracting_from_bloodstar=1
		;;
	"--remove")
		is_removing_generated_tokens=1
		;;
	"--remove-create")
		is_removing_generated_tokens=1
		is_botc_tokens_create=1
		;;
	"--create")
		is_botc_tokens_create=1
		;;
	"--only-group-config")
		is_generating_group_config=1
		;;
	"--group")
		is_adding_subdirectory=1
		is_botc_tokens_group=1
		;;
	*)
		is_extracting_jsons_from_bloodstar_json=1
		is_generating_group_config=1
		is_removing_generated_tokens=1
		is_botc_tokens_create=1
		is_adding_subdirectory=1
		is_botc_tokens_group=1
		;;
esac

if (( is_extracting_jsons_from_bloodstar_json )); then
	echo node ./dump_from_bloodstar.js json $(ls *characters_list.json)
	node ./dump_from_bloodstar.js json $(ls *characters_list.json)
fi

if (( is_only_extracting_from_bloodstar )); then
	exit 0
fi

eval "declare -a character_ids=($(cat "$scripttool_json_path" | grep -Po '"id":\s*\K"[^_]\w+"|^\s*\K(?<!\t{3})"\w+"(?=\s*,\s*$)'))"
eval "declare -A character_id_set=(${character_ids[@]/*/\[&\]=\"1\"})"

unset character_id_set["dusk"]
unset character_id_set["minioninfo"]
unset character_id_set["demoninfo"]
unset character_id_set["dawn"]

if (( is_generating_group_config )); then

	character_names=("${character_ids[@]%_*}")

	cat <<-END > "$grouping_config_file"
	[
	  {
	    "id": "_meta",
	    "author": "${author}",
	    "name": "${output_script_directory}"
	  }${character_names[@]/*/,$'\n'"  "\"&\"}
	]
	END
	echo "create $grouping_config_file to be used with \`botc_tokens group $grouping_config_file\`"
fi

function set_tokens_directory() {

	local output_script_directory="$1"

	if [ -n "$output_script_directory" ]; then
		echo rm -r $(ls "$token_directory/$output_script_directory/"*)
		rm -r "$token_directory/$output_script_directory/"*
	fi

	for character_id in "${character_ids[@]}"
	do
		name="${character_id%_*}"
		home_script="${character_id#"$name"}"
		home_script="${home_script#_}"

		token_script_directory="$token_directory/${home_script:=_}"

		for file_name in $(find "$token_script_directory" -type f | grep -E "\\b$name\\b")
		do
			target_file_path="$(realpath "$file_name")"

			if [ -z "$output_script_directory" ]; then

				if [ "$home_script" != "_" ]; then
					echo rm \"$target_file_path\"
					rm "$target_file_path"
				fi

			else

				script_relative_file_path="${file_name#${token_script_directory}/}"
				output_file_name="$(basename "$script_relative_file_path" | tr -cd '\0-\177')"
				output_directory_path="$token_directory/$output_script_directory/$(dirname "$script_relative_file_path")"
				output_file_path="$output_directory_path/$output_file_name"

				if [ ! -e "$output_directory_path" ]; then
					mkdir -p "$output_directory_path"
				fi

				if [ -f "$output_file_path" ]; then rm "$output_file_path"; fi

				echo ln -T \"$target_file_path\" \"$output_file_path\"
				ln -T "$target_file_path" "$output_file_path"
			fi
		done
	done
}

if (( is_removing_generated_tokens )); then
	echo set_tokens_directory
	set_tokens_directory
fi

if (( is_botc_tokens_create )); then
	echo "$botc_tokens" create -o "$token_directory" --components "./components"
	"$botc_tokens" create -o "$token_directory" --components "./components"

	for image_file in $(find "$token_directory" -type f -name "*.png"); do
		if ls "$image_file" | grep -P '[\x80-\xFF]'; then
			image_file_without_nonascii=$(tr -cd '\0-\177' <<<"$image_file")
			mv "$image_file" "$image_file_without_nonascii"
		fi
	done
fi

#if (( is_adding_subdirectory )); then
#	echo set_tokens_directory "$output_script_directory"
#	set_tokens_directory "$output_script_directory"
#fi

if (( is_botc_tokens_group )); then
	echo "$botc_tokens" group "$grouping_config_file" --token-dir "$token_directory" --output-dir "$output_script_directory"
	"$botc_tokens" group "$grouping_config_file" --token-dir "$token_directory" --output-dir "$output_script_directory"
fi