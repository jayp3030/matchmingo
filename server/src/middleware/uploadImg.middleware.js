const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const sharp = require("sharp");
// const { createReadStream } = require('fs');
const { PassThrough } = require('stream');

// var storage = new GridFsStorage({
//   url: 'mongodb://0.0.0.0:27017/MatchMingo',
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req,file) => {
//     const id = req.query.id;
//     const match = ["image/png", "image/jpeg"];
//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${id}-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: 'users',
//       filename: `${id}-${file.originalname}`
//     };
//   }
// });

var storage = new GridFsStorage({
  url: 'mongodb+srv://matchmingo:dhruwang@clustermm.t9rtc3r.mongodb.net/matchmingo',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  // file:  (req,file) => {

  //   const imageBuffer = file.buffer;
  //   constcompressedImage = sharp(imageBuffer)
  //   .resize({ width: 500 })
  //   .jpeg({ quality: 80 })
  //   .toBuffer();

  //   const id = req.query.id;
  //   const match = ["image/png", "image/jpeg"];
  //   if (match.indexOf(file.mimetype) === -1) {
  //     const filename = `${id}-${file.originalname}`;
  //     return filename;
  //   }
  file: (req,file) => {
    console.log(file)
    const id = req.query.id;
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${id}-${file.originalname}`;
      return filename;
    }

    const pipeline = sharp();
    pipeline.resize(200, 200, { fit: "inside", withoutEnlargement: true });
    pipeline.webp({ quality: 60 });

    const transform = () => {
      const writableStream = new PassThrough();
      pipeline.pipe(writableStream);
      return writableStream;
    };

    return {
      bucketName: 'users',
      filename: `${id}-${file.originalname}`,
      metadata: {
        originalName: file.originalname,
      },
      contentType: 'image/webp',
      transform,
    };
  }
  // file: (req, file) => {
  //   return new Promise((resolve, reject) => {
  //     // read the image file as a buffer
  //     const imageBuffer = file.buffer;
      
  //     // compress the image using sharp
  //     sharp(imageBuffer)
  //       .jpeg({ quality: 50 })
  //       .toBuffer((err, compressedImageBuffer) => {
  //         if (err) {
  //           return reject(err);
  //         }
          
  //         // create a new file in GridFS with the compressed image buffer
  //         const filename = id + file.originalname;
  //         const fileInfo = {
  //           filename: filename,
  //           bucketName: 'users'
  //         };
  //         resolve(fileInfo);
  //       });
  //   });
  // }
});


var uploadFiles = multer({ storage: storage }).array("images");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
