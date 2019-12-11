const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// import modules
const crud = require('./lib/crud');
const list = require('./lib/list');


// start screen 
const init = async () => {

    clear();

    console.log(
        chalk.yellowBright(
            figlet.textSync('Quiche', { horizantalLayout: 'full' })
        )
    );
    // need to make these callable by args
    // list.createList();
    // list.makeValueArr();
}


const run = () => {
    init()
    list.makeValueArr();
}

run();