const express = require("express");

// create router for different actions of task module
const router = express.Router();
const {listAction, formAction, deleteAction, saveAction} = require("./controllers/task.controller");

// add actions to router
router.get("/", listAction);
router.get("/:id", formAction);
router.get("/new", formAction); // same action for new and edit task
router.get("/delete/:id", deleteAction);
router.post("/save", saveAction);

module.exports = router;