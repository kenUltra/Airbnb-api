const express = require("express");
const rout = express.Router();
const path = require("path");
const webBase = "^/$|Airbnb(.html)?";

rout.get(webBase, (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/static", "Airbnb.html"));
});
rout.get('/Home', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "Home.json"));
});
rout.get('/Airbnb-about', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "about.json"));
});
rout.get('/Airbnb-hostPage', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "host.json"));
});
rout.get('/Airbnb-lang', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "language.json"));
});
rout.get('/Airbnb-activity', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "link.json"));
});
rout.get('/Airbnb-location', (req, res) => {
	console.log(req.statusCode, req.url);
	res.sendFile(path.join(__dirname, "..", "/model", "Place.json"));
});

rout.get("*/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "/static", "Page", "Error.html"));
});
module.exports = rout;
