const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');
// routes

// Index
router.get('/', (req, res) => {
    Todo.find({}, (error, allTodos) => {
        if (error) {
            res.send(error)
        } else {
            res.render('Index', { 
                todos: allTodos
            });
        };
    });
});

router.post('/new', (req, res) => {
    Todo.create(req.body, (error, data) => {
        res.redirect('/todos')
    })
});

router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, () => {
        res.redirect('/todos');
    })
})

module.exports = router