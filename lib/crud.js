const list = require('./list');
const inquirer = require('./inquirer');

// add values to the right list  
module.exports = {
    handleAddingValues: async () => {
        try {

            // add to most recently made list? 
            const values = list.makeValueArr();
            const listArr = list.getAllLists();
            const answer = await inquirer.askAddToCurrentList();

            // get most recently made list (last in the listarray)
            if (answer === true) {
                // get -1 index on quiche.lists
                const mostRecentList = listArr[listArr.length - 1];
                console.log(mostRecentList)
                // append each value via loops 
                list.addValuesToList(values, mostRecentList);

            } else {
                // if no, prompt for the list to add the values to
                const chosenList = await inquirer.askWhichList(listArr);

                if (chosenList.length) {

                    list.addValuesToList(values, chosenList);
                }
            }
        } catch (err) {
            if (err) {
                console.log(err);
            }
        } finally {
            // is this necessary? 
            return true;
        }

    }
} 