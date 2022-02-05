const { User, validateReg, validateAuth } = require("../models/user");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
	async registration(req, res) {
		try {
			const { error } = validateReg(req.body);
			if (error) return res.status(400).send({ message: error.details[0].message });

			const user = await User.findOne({ email: req.body.email });
			if (user) return res.status(409).send({ message: "User with given email already Exist!" });

			const hashPassword = await bcrypt.hash(req.body.password, 10);
			const userRole = await Role.findOne({ value: "USER" });
			await new User({ ...req.body, password: hashPassword, roles: [userRole.value] }).save();

			res.status(201).send({ message: "User created successfully" });
		} catch (error) {
			console.log(error);
			res.status(500).send({ message: "Internal Server Error" });
		}
	}

	async login(req, res) {
		try {
			const { error } = validateAuth(req.body);
			if (error) return res.status(400).send({ message: error.details[0].message });

			const user = await User.findOne({ email: req.body.email });
			if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

			const validPassword = await bcrypt.compare(req.body.password, user.password);
			if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });
			const token = jwt.sign({ id: user._id, roles: user.roles }, "secret", { expiresIn: "1h", });

			res.json({ data: token });
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
		}
	}

	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new authController();