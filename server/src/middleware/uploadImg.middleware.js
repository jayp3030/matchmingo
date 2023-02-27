const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");


var storage = new GridFsStorage({
  url: 'mongodb://0.0.0.0:27017/MatchMingo',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `dhruwang@gmail.com-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'users',
      filename: `dhruwang@gmail.com-${file.originalname}`,
    };
  }
});

var uploadFiles = multer({ storage: storage }).single("image");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;