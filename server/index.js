const express = require('express');
const body_parser = require('body-parser');
const shortid = require('shortid');
const cors = require('cors');
const app = express();

const todos = []

app.use(cors());

app.use(body_parser.json())

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.post('/todos', (req, res) => {
    const todo = {
        id: shortid.generate(),
        title: req.body.title,
        body: req.body.body
    }
    todos.push(todo)
    res.send({
        success: true
    })
})

app.delete('/todos/:id', (req, res) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === req.params.id) {
            todos.splice(i, 1)
        }
    }
})

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})