const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  // reactionId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  reactionBody: {
    type: String,
    require: true,
    max: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date) {
      if (date) return;
      date.toIsoString().split("T")[0];
    },
  },
});


module.exports = reactionSchema;
