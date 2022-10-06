const routes = require('express').Router();
const taskController = require("../controller/taskController")


routes.get("/", taskController.getAll);

module.exports = routes;