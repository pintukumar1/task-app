// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database')
    }
    const db = client.db(dataBaseName)
    
    db.collection('tasks').deleteOne({
        completed: true
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})