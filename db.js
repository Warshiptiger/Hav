const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://vijay:anirudh@cluster0.rteh6k1.mongodb.net/warsheep'

mongoose.connect(mongoURL , {useunifiedtopology : true , usenewurlparser: true })

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('mongoDB Connection failed')
})

connection.on('conencted',()=>{
    console.log('mongoDB Connection is Successful')
})

module.exports = mongoose

