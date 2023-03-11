const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");


var storage = new GridFsStorage({
  url: 'mongodb://0.0.0.0:27017/MatchMingo',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req,file) => {
    const id = req.query.id;
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${id}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'users',
      filename: `${id}-${file.originalname}`
    };
  }
});

var uploadFiles = multer({ storage: storage }).array('images');
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;