const router = require("express").Router();
// Import and destructure our thought ops functions
const {
  getThoughts,
  getOneThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction
} = require("../../controllers/thoughtController");

// /api/thoughts  root route ops
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId  by ID ops
router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;