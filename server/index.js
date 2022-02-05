const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth");
const mongoose = require('mongoose');

// database connection
const PORT = process.env.PORT || 8080;
const CONNECTION_URL = 'mongodb+srv://kurisutina:kurisutina123@cluster0.jcpqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const CONNECTION_PARAMS = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(CONNECTION_URL, CONNECTION_PARAMS)
	.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/", authRouter);

