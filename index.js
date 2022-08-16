const express=require('express');
const cors = require('cors');

const app=express();

const port=4000;

// const util=require('./routes/util.js')

const fileRouter=require('./routes/fileRouter')
const utilRouter=require('./routes/util')

app.use(cors());
app.use(express.json());

app.use('/util',utilRouter);


app.listen(port,()=>{
    console.log('Express Started');
})