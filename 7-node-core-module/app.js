// file system
const fs = require('node:fs');


// Menuliskan stirng ke file (synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronous')
// }catch (e){
//     console.log(e)
// }

// Menuliskan stirng ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello World Secara asynchronous', (err) =>{
//     console.log(err);
// });


//Mmebaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data)


//Mmebaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });


// Readline
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process')
const rl = readline.createInterface({input, output})



rl.question('Masukkan Nama anda: ', (nama) => {
    rl.question('Masukan Nomer Anda: ', (nomer) => {
        const contact = {nama, nomer}
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(file)

        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log(`terima kasih sudah memasujan data`)
        rl.close()
    })
})



