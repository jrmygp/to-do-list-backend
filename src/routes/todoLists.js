const express = require("express");
const router = express.Router();
const { todoListControllers } = require("../controllers");

router.post("/", todoListControllers.createNewTodoList)
router.get("/", todoListControllers.getAllTodoList)
router.delete("/:id", todoListControllers.deleteTodoList)
router.patch("/:id", todoListControllers.editTodoList)

module.exports = router;