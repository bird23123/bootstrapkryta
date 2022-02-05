const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
	try {
		const token = req.user;
		console.log(token);
		if (!token) {
			return res.status(403).json({ message: "Пользователь не авторизован" });
		}
		const decodedData = jwt.verify(token, "secret");
		req.user = decodedData;
		console.log(decodedData);
		next();
	} catch (e) {
		console.log(e);
		return res.status(403).json({ message: "Пользователь не авторизован" });
	}
}