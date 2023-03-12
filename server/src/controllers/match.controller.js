
const Matches = require("../model/matches.model");



// function to push crushid to like array of sender and add sender id to likedby array of crushid
async function addLike(req, res) {
  const {
    userId,
    id
  } = req.body;
  let user = await Matches.findOneAndUpdate(
    { userId : userId }, //finds user with ID
    {$addToSet: {likes : id} }, //push id to likes array
    { upsert: true, new: true } // create a user if user not found
    )
    let user2 = await Matches.findOneAndUpdate(
        { userId : id }, //finds user with ID
        {$addToSet: {likedby : userId} }, //push id to likedby array
        { upsert: true, new: true } // create a user if user not found
        )
  res.status(204).json({ user: user, user2:user2 });
}

// function to fetch matches of a user 

async function fetchMatches(req, res) {
  try {
    const userId = req.query.id;
    const user = await Matches.findOne({ userId: userId });
    if(!user){
        return res.status(400)
    }
    const matchArray = user.likes.filter(element => user.likedby.includes(element));
    res.status(200).json(matchArray);
  } catch (error) {
    return res.status(500).json("internal server error");
  }
}

module.exports = {
  addLike,
  fetchMatches
};
