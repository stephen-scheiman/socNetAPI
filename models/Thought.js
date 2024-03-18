const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dayjs = require('dayjs')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: dayjs(),
      get: (date) => dayjs(date).format("dddd, MMMM D, YYYY h:mm A"),
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
