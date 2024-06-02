const express = require('express');
const connectDB = require('./db'); 
const cors = require('cors'); 

const app = express();

const roomsroute = require('./routes/roomsroute');


connectDB();


app.use(cors());

app.use(express.json());
app.use('/api/rooms', roomsroute);

app.listen(5000, () => {
    console.log('App listening on port 5000 using Nodemon!');
});
