const { todoListDB } = require("../database");
const { nanoid } = require("nanoid")

const todoListControllers = {
  getAllTodoList: (req, res) => {
    if (!todoListDB.length) {
      res.status(404).json({
        message: "No list found",
      });
      return;
    }

    res.status(200).json({
      message: "List found",
      result: todoListDB,
    });
  },

  createNewTodoList: (req, res) => {
    const newTodoListData = req.body;

    if (!newTodoListData) {
      res.status(400).json({
        message: "Employee data is required",
      });
      return;
    }

    if (!newTodoListData.action) {
      res.status(400).json({
        message: "Action is required",
      });
      return;
    }

    if (!newTodoListData.status) {
      res.status(400).json({
        message: "Status is required",
      });
      return;
    }

    newTodoListData.id = nanoid();

    todoListDB.push(newTodoListData);

    res.status(201).json({
      message: "Created new to do list",
      result: newTodoListData,
    });
  },

  deleteTodoList: (req, res) => {
    const listId = req.params.id;

    const findIndex = todoListDB.findIndex((val) => {
      return val.id == listId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: "list not found",
      });
      return;
    }

    todoListDB.splice(findIndex, 1);

    res.status(200).json({
      message: "Deleted list",
    });
  },
  editTodoList: (req, res) => {
    const listId = req.params.id;
    const editListData = req.body;

    const findIndex = todoListDB.findIndex((val) => {
      return val.id == listId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: "List not found",
      });
      return;
    }

    todoListDB[findIndex] = {
      ...todoListDB[findIndex],
      ...editListData,
    };

    res.status(200).json({
      message: "Edited list",
      result: todoListDB[findIndex],
    });
  }
}

module.exports = todoListControllers