const routes = require('express').Router();
const taskController = require("../controller/taskController")


routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method", taskController.getById)
routes.post("/updateOne/:id", taskController.updateTask)
routes.get("/deleteOne/:id", taskController.deleteOneTask)


module.exports = routes;