const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require('knex');
const createTodo = require('./controllers/createTodo');
const getAllTodo = require('./controllers/getAllTodo');
const getSelectTodo = require('./controllers/getSelectTodo');
const updateSelectTodo = require('./controllers/updateSelectTodo');
const deleteSelectTodo = require('./controllers/deleteSelectTodo');
const app = express();

const db = knex({
  // Enter your own database information here based on what you created
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'masterkey',
    database : 'pern'
  }
});
// middleware
app.use(cors());
app.use(bodyParser.json());
//--------Routes----------
//create
app.post('/createTodo', createTodo.handleCreateTodo(db))
// get *
app.get('/getAllTodo', getAllTodo.handleGetAllTodo(db))
// get 1
app.get('/getSelectTodo/:todo_id', getSelectTodo.handleGetSelectTodo(db))
// update 1
app.put('/updateSelectTodo/:todo_id', updateSelectTodo.handleUpdateSelectTodo(db))
// delete
app.delete('/deleteSelectTodo/:todo_id', deleteSelectTodo.handleDeleteSelectTodo(db))


app.listen(3000, () => {
	console.log("server has started on port 3000");
}); 