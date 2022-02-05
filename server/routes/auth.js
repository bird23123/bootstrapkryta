const router = require("express").Router();
const controller = require('../controllers/authController');

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get('/get', controller.getUsers)

module.exports = router;
