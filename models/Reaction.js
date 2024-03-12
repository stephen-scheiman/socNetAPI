const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: Schema.Types.ObjectId.new,
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
const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
