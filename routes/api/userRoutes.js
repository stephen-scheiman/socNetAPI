const router = require("express").Router();
// Import and destructure our user ops functions
const {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users  root route ops
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId  by ID ops
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/
router.route("/:userId/friends/").post(addFriend).delete(removeFriend);


module.exports = router;
