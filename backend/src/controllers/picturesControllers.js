// const models = require("../models")
// const multer = require("multer")
// const mime = require("mime-types")
// const path = require("path")

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const destinationPath = path.join(__dirname, "../../uploads")
//     cb(null, destinationPath)
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now()
//     const extension = mime.extension(file.mimetype)
//     const originalFileName = file.originalname.split(".")[0]
//     const fileName = originalFileName + "_" + uniqueSuffix + "." + extension
//     cb(null, fileName)
//   },
// })

// const upload = multer({ storage }).single("image")

// const add = [
//   upload,
//   async (req, res, next) => {
//     // console.log("test")
//     try {
//       const fileName = req.file.filename
//       await models.pictures.uploadPicture(fileName)
//       res.locals.fileName = fileName
//       next()
//     } catch (error) {
//       console.error("Erreur lors du téléchargement de l'image :", error)
//       res
//         .status(500)
//         .json({ message: "Erreur lors du téléchargement de l'image." })
//     }
//   },
//   (req, res) => {
//     res.status(200).json({
//       message: "Image téléchargée avec succès.",
//       fileName: res.locals.fileName,
//     })
//   },
// ]

// const destroy = async (req, res) => {
//   try {
//     await models.pictures.deletePicture(req.params.id)
//     res.status(200).json({ message: "Image supprimée avec succès." })
//   } catch (error) {
//     console.error("Erreur lors de la suppression de l'image :", error)
//     res
//       .status(500)
//       .json({ message: "Erreur lors de la suppression de l'image." })
//   }
// }

// const browse = (req, res) => {
//   models.pictures
//     .findAll()
//     .then((imageRows) => {
//       res.status(200).json({ files: imageRows })
//       // console.log("transfert ok")
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

// const picturesControllers = {
//   upload,
//   add,
//   destroy,
//   browse,
// }

// module.exports = picturesControllers
