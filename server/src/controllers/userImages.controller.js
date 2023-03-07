const MongoClient = require("mongodb").MongoClient;
const upload = require("../middleware/uploadImg.middleware");
// const GridFSBucket = require("mongodb").GridFSBucket;


const url = "mongodb://0.0.0.0:27017";

const baseUrl = "http://localhost:8000/details/userImages";

const mongoClient = new MongoClient(url);

async function saveUserImages(req, res) {

  try {
    await upload(req, res);
    console.log(req.file);

    if (req.file === undefined) {
      return res.send({
        message: "You must select a file.",
      });
    }

    return res.send({
      message: "File has been uploaded.",
    });
  } catch (error) {
    console.log(error);

    return res.send({
      message: `Error when trying upload image: ${error}`,
    });
  }
}

async function getImages(req, res) {
  try {
    await mongoClient.connect();

    const database = mongoClient.db("MatchMingo");
    // const images = database.collection('MMImages.files');
    const chunks = database.collection("users.chunks");

    const cursor = chunks.find({});
  
    //   if ((await cursor.collection.estimatedDocumentCount()) === 0) {
    //     return res.status(500).send({
    //       message: "No files found!",
    //     });
    //   }

    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        data: doc.data,
      });
    });
    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
}

module.exports = {
  saveUserImages,
  getImages,
};
