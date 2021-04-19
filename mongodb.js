// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient,
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')
const id = ObjectID()
console.log(id)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database')
    }
    const db = client.db(dataBaseName)
    
    db.collection('users').insertOne({
        id: id,
        name: 'P.K.',
        age: 21
    }, (error, result) => {
        if(error) {
            console.log('Unable to insert user!')
        }
         console.log(result.ops)
    }) 

    // db.collection('users').insertMany([
    //    {
    //     name: 'Pin2',
    //     age: 21
    //    },{
    //        name: 'Pintoo',
    //        age: 20
    //    }
    // ], (error, result) => {
    //     if(error){
    //         console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: '  clean the house',
    //         completed: false
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ],(error,result) => {
    //     if(error) {
    //         return console.log('unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })

})