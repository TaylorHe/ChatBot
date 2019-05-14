const rRoutes = require("./request");

const constructorMethod = app => {
	app.use("/request", rRoutes);
	
	app.use("*", (req, res) => {
		res.status(404).json({error: "Not found"});
	});
};

module.exports = constructorMethod;