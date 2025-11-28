const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // gunakan ejs
app.use(expressLayouts); // third-party middleware
app.use(express.static("public")); //built-in middleware

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Joko",
      email: "joko@mail.com",
    },
    {
      nama: "Rudy",
      email: "rudy@mail.com",
    },
    {
      nama: "Mial",
      email: "mial@mail.com",
    },
  ];
  res.render("index", {
    nama: "Jobio",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman about",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman detail contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1> 404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
