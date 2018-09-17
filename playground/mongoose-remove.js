const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}) - returns docs
// Todo.findByIdAndRemove - returns doc

Todo.findOneAndRemove({
    _id: '5b9fd4ccf244c808246c0c55'
}).then(todo => {
    console.log(todo);
})

Todo.findByIdAndRemove('5b9fd4ccf244c808246c0c55').then(todo => {
    console.log(todo);
});