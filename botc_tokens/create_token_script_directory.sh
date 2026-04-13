character_ids=(
	"joker_imppreposterous"
	"smartypants_trustmebro"
	"sleuth_homebrew"
	"hairdresser_homebrew"
	"carnivalreveller_imppreposterous"
	"biologist_trustmebro"
	"mentalist_homebrew"
	"demographer_homebrew"
	"psychic_trustmebro"
	"quizmaster_imppreposterous"
	"hero_imppreposterous"
	"champion_imppreposterous"
	"doppelgänger_imppreposterous"
	"darling_imppreposterous"
	"rookie_imppreposterous"
	"recluse"
	"snitch"
	"bigshot_imppreposterous"
	"bully_trustmebro"
	"crimsonboy_imppreposterous"
	"wraith"
	"brainformer_imppreposterous"
	"monstro_imppreposterous"
	"imp"
	"ker_trustmebro"
	"apprentice"
	"bishop"
	"timeeater_trustmebro"
	"careworker_trustmebro"
	"juror_homebrew"
	"hindu"
	"supervisor_imppreposterous"
	"bootlegger"
	"apatheist_trustmebro"
	"commentator_imppreposterous"
	"fairplayer_trustmebro"
	"revolutionary"
)

author="Christoph"
token_directory="./tokens"
declare -i is_removing_token_inputs=0

if [ "$1" = "--remove" ]; then
	is_removing_token_inputs=1
fi

output_script_directory="casual-on-the-homebrewer"

for character_id in "${character_ids[@]}"
do
	name="${character_id%_*}"
	home_script="${character_id#"$name"}"
	home_script="${home_script#_}"

	token_script_directory="$token_directory/${home_script:=_}"

	for file_name in $(find "$token_script_directory" -type f | grep -E "\\b$name\\b")
	do
		target_file_path="$(realpath "$file_name")"

		if (( is_removing_token_inputs )); then

			if [ "$home_script" != "_" ]; then
				set -x
				rm "$target_file_path"
				set +x
			fi

		else

			script_relative_file_path="${file_name#${token_script_directory}/}"
			output_file_path="$token_directory/$output_script_directory/$script_relative_file_path"

			if [ -f "$output_file_path" ]; then rm "$output_file_path"; fi

			set -x
			ln -T "$target_file_path" "$output_file_path"
			set +x
		fi
	done
done

if (( !is_removing_token_inputs )); then

	character_names=("${character_ids[@]%_*}")

	cat <<-END > printable_script.json
	[
	  {
	    "id": "_meta",
	    "author": "${author}",
	    "name": "${output_script_directory}"
	  }${character_names[@]/*/,$'\n'"  "\"&\"}
	]
	END
	echo "create printable_script.json to be used with \`botc_tokens group printable_script.json\`"
fi