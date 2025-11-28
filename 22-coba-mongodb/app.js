const { mongoClient, ObjectId } = require("mongodb");
const MongoClient = require("mongodb/lib/mongo_client");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi Gagal!");
  }

  //pilih database
  const db = client.db(dbName);

  // menambahkan 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       nama: "Eirrk",
  //       email: "rik@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal menambahkan data");
  //       }

  //       console.log(result);
  //     }
  //   );

  // menambahkan lebih dari 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertMany(
  //     [
  //       {
  //         nama: "risika",
  //         email: "risika@gmail.com",
  //       },
  //       {
  //         nama: "Eirrk",
  //         email: "rik@yahoo.com",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal menambahkan data");
  //       }

  //       console.log(result);
  //     }
  //   );

  //Menampilkan Semua data pada collection
  // db.collection("mahasiswa").find().toArray((error,result) => {
  //     if(error){
  //         return console.log("Gagal menampilkan data");
  //     }
  //     console.log(result);
  // })

  //Menampilkan data berdasarkan kriteria
  //   db.collection("mahasiswa")
  //   .find({ _id: ObjectId("69282ccabe5d0f095da8063d") })
  //   .toArray((error, result) => {
  //     if (error) {
  //       return console.log("Gagal menampilkan data");
  //     }
  //     console.log(result);
  //   });

  //mengupdate Data
  //   const updatePromise = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectId("69282ccabe5d0f095da8063d"),
  //     },
  //     {
  //       $set: {
  //         email: "agam@yahoo.com",
  //       },
  //     }
  //   );

  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(`Gagal Update Data: ${error}`);
  //     });

  //mengupdate lebih dari sauu data berdasarkan kriteria
  //   db.collection("mahasiswa").updateMany(
  //     {
  //       nama: "Eirrk",
  //     },
  //     {
  //       $set: {
  //         nama: "Eirrk doang",
  //       },
  //     }
  //   );

//   //menghapus 1 Data
//   db.collection("mahasiswa")
//     .deleteOne({
//       nama: "joko",
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(`Gagal menghapus data: ${error}`);
//     });

 //menghapus lebih dari 1 Data
  db.collection("mahasiswa")
    .deleteMany({
      nama: "Eirrk doang",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(`Gagal menghapus data: ${error}`);
    });
});
