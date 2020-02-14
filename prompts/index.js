const { ux } = require('@cto.ai/sdk')
const { STATES } = require('../constants')

const { white, reset } = ux.colors

const inputPrompt = [
  {
    type: 'input',
    name: 'email',
    message: 'Type input here',
  },
]

const numberPrompt = [
{
        type: "number",
        name: "count",
        message: "How many hoorays do you want?",
        flag: "c",
        default: 3,
        minimum: 0,
        maximum: 20
    },
]

const secretPrompt = [
  {
        type: "secret",
        name: "secret",
        message: "What SSH private key do you want to use?"
  },
]

const passwordPrompt = [
  {
    type: 'password',
    name: 'password',
    message: 'Enter password here',
  },
]

const confirmPrompt = [
{
        type: "confirm",
        name: "verbose",
        flag: "V",
        message: "Do you want to run in verbose mode?"
    }
]

const listPrompt = {
  type: 'list',
  name: 'list',
  message: `\nWhat impact is the incident having ${reset.green('→')}`,
  choices: [
    'All customers are affected.',
    'Large segment of customers are affected.',
    'Small segment of customers are affected.',
    'Site performance degraded for some customers.',
    'Potential issue, but customers are currently unaware.',
    'All customers are affected.',
    'Large segment of customers are affected.',
    'Small segment of customers are affected.',
    'Site performance degraded for some customers.',
    'All customers are affected.',
    'Large segment of customers are affected.',
    'Small segment of customers are affected.',
    'Site performance degraded for some customers.',
  ],
}

const autocompletePrompt = {
  type: 'autocomplete',
  name: 'autocomplete',
  message: `Select a state to travel from ${reset.green('→')} `,
  autocomplete: STATES,
}

const checkboxPrompt = [
{
        type: "checkbox",
        name: "tools",
        message: "Which interpreters would you like to have included in your OS image?",
        choices: ["Lua", "Node.js", "Perl", "Python 2", "Python 3", "Raku", "Ruby"]
    }
]


const template = `Features:

Fixes:

Chores:
`

const editorPrompt = [
{
        type: "editor",
        name: "notes",
        message: "Please enter your release notes",
        default: template
    }
]

const datetimePrompt = {
  type: 'datetime',
  name: 'datepicker',
  message: `\nWhen are you going ${reset.green('→')}`,
  variant: 'datetime',
}

module.exports = {
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
}
