const router = require("express").Router();
// Import and destructure our thought ops functions
const {
  getThoughts,
  getOneThought,
  createThought,
  deleteThought,
  updateThought
} = require("../../controllers/thoughtController");

// /api/thoughts  root route ops
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId  by ID ops
router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);

module.exports = router;