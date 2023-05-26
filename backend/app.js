const express = require('express'); //to build backend quickly
const app = express();  //lisance of express
const cors = require('cors'); //!for cross origin policy
const PORT = 8745;
require('./dB')
 
app.use(cors()); //"app.use(cors())" means use this cors package when server starts up


app.use(express.json()); //"app.use(express.json
app.use(express.urlencoded({extended:true})); //"app.use(express.
app.use(express.static('public'));



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


