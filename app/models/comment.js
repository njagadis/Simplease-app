const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
    content: String,
    owner: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }
});

const Comment= mongoose.model("Forum", ForumSchema);
module.exports = Comment; 
