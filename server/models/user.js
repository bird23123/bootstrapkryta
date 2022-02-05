const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const secret = "secret";

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	roles: [{type: String, ref: "Role"}]
});

userSchema.methods.generateAuthToken = function () {
	console.log(`id: ${this._id}`, `roles: ${this.roles}`);
	return jwt.sign({ _id: this._id, roles: this.roles }, secret, { expiresIn: "1h", });
};

const User = mongoose.model("user", userSchema);

const validateReg = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

const validateAuth = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validateAuth, validateReg };