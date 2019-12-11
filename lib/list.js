const inquirer = require('./inquirer');

const quiche = {
    lists: {
        'beauty': [],
        'concerts': [],
        'delivery': [],
    },
}

const listIndex = quiche['lists'];
module.exports = {
    createList: async () => {
        try {
            const listname = await inquirer.askListName();
            listIndex[listname.name] = [];
            return listIndex;
        } catch (err) {
            if (err) {
                console.log(err);
            }
        } finally {
            return listIndex;
        }
    },

    getAllLists: () => {
        // return lists as an array
        console.log(quiche['lists']);
        return quiche['lists'];
    },

    makeValueArr: async () => {
        try {
            const answers = await inquirer.askValueInput();
            const values = answers.value;
            let valArray = values.split(' ');
            valArray.forEach(val => {
                let fval = parseFloat(val) || 0;
                if (fval === 0) {
                    // remove zeros from valArray
                }
                console.log(fval);
            })
            return valArray;
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    },

    addValuesToList: async (values, list) => {
        // add values via loop. 
        values.forEach(value => {
            list.append(value)
        })
        return list;
    },

    getListTotal: async list => {
        let total = sum(list);
        return total;
    },

} 