// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b9d5d7618c43010809024e4')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err)
    // });

    db.collection('Users').find({name: 'Snir'}).toArray().then(docs => {
        console.log(`Users:`)
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(`Didn't find any documents`)
    })

    // db.close();
});