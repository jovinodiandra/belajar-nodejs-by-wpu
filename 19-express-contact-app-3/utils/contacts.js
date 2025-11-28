const fs = require("node:fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

//Mengambil semua data di contacts.json
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// Mencari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.nama === nama);
  return contact;
};

// menulis / menimpa file contacts.json dengan data baru
const saveContacts = (contact) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contact));
};

// Menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

//cek apakah nama duplikat
const cekduplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
};

// delete contact
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
  saveContacts(filteredContacts);
};

// ubah contact
const updateContact = (contactBaru) => {
  const contacts = loadContact();

  // hilangkan contact lama yang namanya sama dengan namaLama
  const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.namaLama);
  delete contactBaru.namaLama;
  filteredContacts.push(contactBaru);
  saveContacts(filteredContacts);
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  cekduplikat,
  deleteContact,
  updateContact,
};
