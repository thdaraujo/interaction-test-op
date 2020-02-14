const { ux, sdk } = require('@cto.ai/sdk')
const {
  inputPrompt,
  numberPrompt,
  secretPrompt,
  passwordPrompt,
  confirmPrompt,
  listPrompt,
  autocompletePrompt,
  checkboxPrompt,
  editorPrompt,
  datetimePrompt,
} = require('./prompts')

const main = async () => {

  const options = {
    'input':        inputPrompt,
    'number':       numberPrompt,
    'secret':       secretPrompt,
    'password':     passwordPrompt,
    'confirm':      confirmPrompt,
    'list':         listPrompt,
    'autocomplete': autocompletePrompt,
    'checkbox':     checkboxPrompt,
    'editor':       editorPrompt,
    'datetime':     datetimePrompt,
    'EXIT':         null,
  }

  while(true){
    const { choice } = await ux.prompt({
      type: 'list',
      name: 'choice',
      message: `\nChoose an interaction to test`,
      choices: Object.keys(options),
      default: "EXIT"
    })

    if(choice == "EXIT"){
      await ux.print("kthxbye!")
      break;
    }

    var result = await ux.prompt(options[choice])
    await ux.print("prompt returned this value -> " + JSON.stringify(result))
  }

}

main()
