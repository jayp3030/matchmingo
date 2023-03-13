const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAuth",
    required: true,
  },
  likes: {
    type: [String],
  },
  likedby: {
    type: [String],
  },
});

module.exports = new mongoose.model("Match", matchSchema);
