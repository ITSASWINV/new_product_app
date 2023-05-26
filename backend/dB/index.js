const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aswinv:aswin732012@cluster0.gco5tbk.mongodb.net/')
.then(()=>{
    console.log('MongoDb Atlas connection established')
})
.catch(err => {
    console.log(err)
    })