const dataBase = require("express"),
	path = require("path"),
	cors = require('cors'),
	AllowedSite  = require('./config/Allowedpage'),
	enter = require("./route/entry"),
	port = process.env.PORT || 2023,
	server = dataBase();

server.use(dataBase.urlencoded({ extended: false }));
server.use(dataBase.json());
server.use(cors(AllowedSite));
server.use(dataBase.static(path.join(__dirname, '/static')));

server.use("/", enter);


server.listen(port, () => {
	console.log("making a start point on port", port);
});
