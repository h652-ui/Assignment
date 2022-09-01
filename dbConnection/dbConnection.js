const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/assignment'

const makeConnection = ()=>{
    mongoose.connect(dbURI, (err)=>{
        if(err){
            console.log(err)
        }
        console.log("Connected")
    })
}

module.exports = makeConnection