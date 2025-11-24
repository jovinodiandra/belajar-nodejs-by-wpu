const validator = require('validator');
const chalk = require('chalk');


// console.log(validator.isEmail('joko@gmail.c'));
// console.log(validator.isMobilePhone('085799009', 'id-ID'));
// console.log(validator.isNumeric('085799009'));

const pesan = chalk`Chalk comes with an {bgBlue.bold.black easy} to use composable {bgGreen.italic.black API} `

console.log(pesan)
