const { Schema } = require("mongoose");
const dayjs = require("dayjs");

const reactionSchema = new Schema({
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
    default: dayjs(),
    get: (date) => dayjs(date).format("dddd, MMMM D, YYYY h:mm A"),
  },
});

module.exports = reactionSchema;
