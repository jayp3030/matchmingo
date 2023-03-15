const MongoClient = require("mongodb").MongoClient;
const upload = require("../middleware/uploadImg.middleware");
require("dotenv").config();
// const GridFSBucket = require("mongodb").GridFSBucket;

const url = process.env.MONGO_URL;

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

    const database = mongoClient.db("matchmingo");
    // const images = database.collection('MMImages.files');
    const chunks = database.collection("users.chunks");

    const cursor = chunks.find({});
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
    const userId = req.user.id;
    const database = mongoClient.db("matchmingo");

    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");

    const images = userImg.find({
      filename: { $regex: userId, $options: "i" },
    }); //array of images starting with userId
    const userImgArr = [];
    for await (const doc of images) {
      const BinaryImg = await chunks.findOne({ files_id: doc._id });
      userImgArr.push(BinaryImg);
    }
    return res.status(200).send(userImgArr);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
}
async function getUserImageById(req, res) {
  try {
    const userId = req.params.id;
    // console.log(userId);
    const database = mongoClient.db("matchmingo");

    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");

    const images = userImg.find({
      filename: { $regex: userId, $options: "i" },
    }); //array of images starting with userId
    const userImgArr = [];
    for await (const doc of images) {
      const BinaryImg = await chunks.findOne({ files_id: doc._id });
      userImgArr.push(BinaryImg);
    }
    return res.status(200).send(userImgArr);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
}
async function getUserImageArr(req, res) {
  try {
    const userIdArr = req.body.userArray;
    const database = mongoClient.db("matchmingo");
    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");
    console.log(userIdArr);
    const userImgArr = [];

    for (let index = 0; index < userIdArr.length; index++) {
      const image = await userImg.findOne({
        filename: { $regex: `${userIdArr[index]}`, $options: "i" },
      });
      const BinaryImg = await chunks.findOne({ files_id: image._id });
      userImgArr.push(BinaryImg);
      
    }
    return res.status(200).send(userImgArr);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
}
async function getUserIDImage(req, res) {
  try {
    const userId = req.user.id;
    const database = mongoClient.db("matchmingo");

    const userImg = database.collection("users.files");
    const chunks = database.collection("users.chunks");

    const images = userImg.find({
      filename: { $regex: `idCard${userId}`, $options: "i" },
    });
    const userImgArr = [];
    for await (const doc of images) {
      const BinaryImg = await chunks.findOne({ files_id: doc._id });
      userImgArr.push(BinaryImg);
    }
    return res.status(200).send(userImgArr);
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
}

module.exports = {
  saveUserImages,
  getImages,
  getUserImage,
  getUserImageById,
  getUserImageArr,
  getUserIDImage,
};
