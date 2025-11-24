const yargs = require('yargs')
// const {simpanContact} = require("./contacts");
const contact = require("./contacts");

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contact.simpanContact(argv.nama, argv.email, argv.noHP)
    },
}).demandCommand();

yargs.command({
    command: 'list',
    describe: 'Menampilkan nama & no HP kontak',
    handler() {
        contact.listContacts();
    }
});

yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contact.detailContact(argv.nama);
    }
});

yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contact.deleteContact(argv.nama);
    }
});

yargs.parse();


