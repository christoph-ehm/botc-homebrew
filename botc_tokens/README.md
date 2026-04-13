I am using the [BOTC Tokens](https://github.com/Tsubashi/botc_tokens/tree/stable?tab=readme-ov-file) project.

## Preparation

Create a Python Virtual Environment in the `botc_tokens/` directory. (VSCode can generate one.)

Install botc_tokens in the virtual environment.

Now, get the resources which are needed to make the tokens. Run the command `botc_tokens update`. This should create a directory `components/` which contaisn the resources.

## Generate printable token images

1. Convert bloodstar JSONs to a directory tree of botc_token JSONs. This can be done automatically by calling `node ./dump_from_bloodstar.js json 'path_to_json' 'path_to_json' …`. This will create a new subdirectory inside the `inputs` directory for each passed bloodstar JSON (and remove the old JSON files).

2. Generate the token images via `botc_tokens create`. Generated tokens appear in a new directory `tokens/…`.

2.1. Regenerate token images. In order to regnerate them, the old token images need to be deletd from the `tokens/…` directory tree. A list of tokens as configured in `./create_token_script_directory.sh` can be removed with `./create_token_script_directory.sh --remove`. Afterwards, run the token generation again and the missing tokens are regenerated.

3. Group the tokens on a printable sheet.

3.1. First collect the generated tokens into a new `tokens/…` subdirectory for your target script. This can be done automatically by configuring and running the file `./create_token_script_directory.sh` which also generates the config file `printable_script.json`.

3.2. Run `botc_tokens group printable_script.json` to make a new `printable/` directory that contains a PDF with the character tokens and a PDF with the reminder tokens. The order of tokens is according to the order of character IDs inside `printable_script.json` which is generated from the order in the list of `./create_token_script_directory.sh`.