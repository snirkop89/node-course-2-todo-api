const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5b9ea12074dbf40ffc7794af11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo);
// }).catch(e => console.log(e));

// Query user collection, grab id 5b9e87501410532204129dc1
// User.findById, handle 3 cases: query works, but no user
// user found - print user, handle other errors

User.findById('5b9e87501410532204129dc1').then(user => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User:', user)
}).catch(e => console.log(e));