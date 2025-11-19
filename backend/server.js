const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mdcat', { useNewUrlParser: true, useUnifiedTopology: true });

const Student = mongoose.model('Student', new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    city:String
}));

app.post('/register', async (req,res)=>{
    await Student.create(req.body);
    res.json({status:'ok'});
});

app.listen(5000, ()=> console.log('Server running on port 5000'));
