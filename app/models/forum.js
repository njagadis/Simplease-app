var mongoose = require("mongoose");

var ForumSchema = new mongoose.Schema({
    content: String,
    send_id: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }
    recipient: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      }
    ],
    comment: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
    ],
});

module.exports = mongoose.model("Forum", ForumSchema);
