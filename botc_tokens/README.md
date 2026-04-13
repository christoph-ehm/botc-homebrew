I am using the [BOTC Tokens](https://github.com/Tsubashi/botc_tokens/tree/stable?tab=readme-ov-file) project.

## Preparation

Create a Python Virtual Environment in the `botc_tokens/` directory. (VSCode can generate one.)

Install botc_tokens in the virtual environment.

Now, get the resources which are needed to make the tokens. Run the command `botc_tokens update`. This should create a directory `components/` which contaisn the resources.

## Generate printable token images

### automatically

* `edit_tokens.sh --only-group-config` → converts a scripttool's JSON into `printable_script.json` for the token image generating tool. This file is used to define which characters are grouped into PDFs.

* `edit_tokens.sh` (without argument) → extracts token configs from found bloodstar JSONs (`edit_tokens.sh --extract-bloodstar`). Removes the old generated token images & regenerates the tokens as found in the script JSON (`edit_tokens.sh --create`). Finally, groups character tokens into a subdirectory, generates the grouping config file (that refers to character tokens from the subdirectory) and generate the printable PDF (`edit_tokens.sh --group`).

### manually

1. Convert bloodstar JSONs to a directory tree of character token configs. This can be done automatically by calling `node ./dump_from_bloodstar.js json 'path_to_json' 'path_to_json' …`. This will create a new subdirectory inside the `inputs` directory for each passed bloodstar JSON (and remove the old JSON files there).

   > This can also be done by running `edit_tokens.sh --extract-bloodstar`. It will extract the token configs of all JSONs ending on `characters_list.json` from the current directory into subdirectories of an `inputs` directory.

2. Generate the token images via `botc_tokens create`. Generated tokens appear in a new directory `tokens/…`.

2.1. Regenerate token images. In order to regnerate them, the old token images need to be deletd from the `tokens/…` directory tree. A list of tokens – corresponding to character ids contained in a JSON of the scripttool – can be removed with `./edit_tokens.sh --remove` (set the JSON file as parameter in the shell script). Afterwards, run the token generation `botc_tokens create` again and the missing tokens are regenerated.

     > Both together can be achieved by running `edit_tokens --create`.

3. Group the tokens on a printable sheet.

3.1. First collect the generated tokens into a new `tokens/…` subdirectory for your target script. This can be done automatically by configuring `edit_tokens.sh` and running `./edit_tokens.sh --add-subdirectory` which also generates the grouping config file `printable_script.json` that references this new subdirectory.

3.2. Run `botc_tokens group printable_script.json` to make a new `printable/` directory that contains a PDF with the character tokens and a PDF with the reminder tokens. The order of tokens is according to the order of character IDs inside `printable_script.json` which is generated from the order in the list of `./edit_tokens.sh`.