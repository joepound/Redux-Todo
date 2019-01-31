const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let todos = [
  {
    id: "439856382475698734265",
    task: "Learn React hooks",
    completed: false
  },
  {
    id: "247569439856388734265",
    task: "Learn Redux",
    completed: true
  },
  {
    id: "569873424398563824765",
    task: "Learn TypeScript",
    completed: false
  }
];

app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

app.post("/api/todos", (req, res) => {
  if (req.body.id !== undefined) {
    todos.push(req.body);
  }
  res.status(201).json(todos);
});

app.put("/api/todos/:id", (req, res) => {
  const targetedTodo = todos.find(todo => todo.id === req.params.id);
  if (targetedTodo !== -1) {
    targetedTodo.completed = !targetedTodo.completed;
    res.status(200).json(todos);
  } else {
    sendUserError("No todo by that ID exists in the database", res);
  }
});

app.delete("/api/todos/clearcompleted", (req, res) => {
  todos = todos.filter(todo => !todo.completed);
  res.status(200).json(todos);
});

app.delete("/api/todos/:id", (req, res) => {
  const foundTodo = todos.find(todo => todo.id === req.params.id);

  if (foundTodo !== -1) {
    todos = todos.filter(todo => todo.id !== req.params.id);
    res.status(200).json(todos);
  } else {
    sendUserError("No todo by that ID exists in the database", res);
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
