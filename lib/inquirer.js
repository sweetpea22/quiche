const inquirer = require('inquirer');

module.exports = {
    askListName: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Name of list: ',
                validate: function (val) {
                    if (val.length) {
                        return true;
                    } else {
                        return 'Please provide a name for your list.';
                    }
                }
            },
        ]
        return inquirer.prompt(questions);
    },

    askValueInput: () => {
        const questions = [
            {
                name: 'value',
                type: 'input',
                message: 'Add to current list (separate your entries by a space): \n',
                validate: function (val) {
                    if (val.length) {
                        return true;
                    } else {
                        return 'You haven\'t provided any values.';
                    }
                }
            },
            {
                name: 'listchoice',
                type: 'checkbox',
                message: 'Select the list you would like to add to.',
                choices: listchoices,
            }
        ]
        return inquirer.prompt(questions);
    },

    confirmValues: () => {
        const questions = [
            {
                name: 'confirm',
                type: 'confirm',
                message: 'Are you sure you want to add these values? y/n',
                default: false
            }
        ];
        return inquirer.prompt(questions);
    },

}