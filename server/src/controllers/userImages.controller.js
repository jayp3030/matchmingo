const MongoClient = require("mongodb").MongoClient;
const upload = require("../middleware/uploadImg.middleware");
// const GridFSBucket = require("mongodb").GridFSBucket;


const url = "mongodb://0.0.0.0:27017";

const baseUrl = "http://localhost:8000/details/userImages";

const mongoClient = new MongoClient(url);

async function saveUserImages(req, res) {

  try {
    await upload(req, res);

    if (req.file === undefined) {
      return res.json({
        message: "You must select a file.",
      });
    }

    return res.json({
      message: "File has been uploaded.",
    });
  } catch (error) {
    console.log(error);

    return res.json({
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
async function getUserImage(req, res) {
  try {
    const userId = req.user.id
    const database = mongoClient.db("MatchMingo");

    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");

    const images = userImg.find({ filename: { $regex: userId, $options: "i" } });
    const userImgArr = [];
    for await (const doc of images) {
      const BinaryImg = await chunks.findOne({ files_id: doc._id })
      userImgArr.push(
        BinaryImg
      );

    }
    return res.status(200).send(userImgArr);


  } catch (error) {
    console.log(error)
    res.status(500).json('internal server error');
  }
}
async function getUserIDImage(req, res) {
  try {
    const userId = req.user.id
    console.log(userId);
    const database = mongoClient.db("MatchMingo");

    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");

    const images = userImg.find({ filename: { $regex: `idCard${userId}`, $options: "i" } });
    const userImgArr = [];
    for await (const doc of images) {
      const BinaryImg = await chunks.findOne({ files_id: doc._id })
      userImgArr.push(
        BinaryImg
      );

    }
    return res.status(200).send(userImgArr);


  } catch (error) {
    console.log(error)
    res.status(500).json('internal server error');
  }
}


module.exports = {
  saveUserImages,
  getImages,
  getUserImage,
  getUserIDImage
};
