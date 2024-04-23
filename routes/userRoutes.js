const { registerUser, loginUser, currentUser } =  require("../controllers/userController");
const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);
router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;