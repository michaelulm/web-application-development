const express = require("express");
// create router for task module
const router = express.Router();
const {listAction, formAction, deleteAction, saveAction} = require("./controllers/task.controller");

//
// // easy bind get or post requests with matching url path including variable e.g. id
// // for multiple entities it's recommended e.g. use /task/delete/:id instead of root /delete/:id
// router.get("/delete/:id", (request, response) => {
//     tasks = deleteTask(tasks, request.params.id); // params.id will be parsed by /:id
//     redirect(response, "/");
// });
//
// router.get("/edit/:id", (request, response) => {
//     send(response, getForm(tasks, request.params.id));
// });
//
// router.get("/new", (request, response) => {
//     send(response, getForm()); // new task will not need any id -> this will be added dynamically
// });
//
// // for multiple entities it's recommended e.g. use /task/save instead of root /save
// router.post("/save", (request, response) => {
//     const task = request.body;
//     tasks = saveTask(tasks, task);
//     redirect(response, '/');
// });

router.get("/", listAction);
router.get("/:id", formAction);
router.get("/new", formAction);
router.get("/delete/:id", deleteAction);
router.post("/save", saveAction);

module.exports = router;