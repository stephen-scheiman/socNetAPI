const { Schema, model } = require("mongoose");

const reaction = new Schema({
  reactionId: {
    type: ObjectId,
    default: ObjectId.new,
  },
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
