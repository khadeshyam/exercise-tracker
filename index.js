const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(express.static('public'));

mongoose.set('strictQuery',true);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('conneted to mongo yeahh');
})
mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/api',apiRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
