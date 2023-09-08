// const AbstractManager = require("./AbstractManager")

// class PicturesManager extends AbstractManager {
//   constructor(database) {
//     super({ table: "gallery" })
//     this.setDatabase(database)
//   }

//   async uploadPicture(file) {
//     if (!this.database) {
//       throw new Error("Database connection not set.")
//     }

//     const query = `
//       INSERT INTO ${this.table} (file_path)
//       VALUES (?)
//     `

//     try {
//       const [result] = await this.database.execute(query, [file])
//       if (result.affectedRows === 1) {
//         // console.log("Picture uploaded and saved in the database and uploads directory.");
//       } else {
//         throw new Error("Failed to upload picture and save in the database.")
//       }
//     } catch (error) {
//       throw new Error(`Error uploading picture: ${error.message}`)
//     }
//   }
// }

// module.exports = PicturesManager
