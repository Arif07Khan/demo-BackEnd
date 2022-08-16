const express=require('express');
const cors = require('cors');

const app=express();

const port = process.env.PORT || 4000;

// const util=require('./routes/util.js')

const fileRouter=require('./routes/fileRouter')
const utilRouter=require('./routes/util')

app.use(cors({origin : ['https://demofrontend01.herokuapp.com']}));
app.use(express.json());

app.use('/util',utilRouter);


app.listen(port,()=>{
    console.log('Express Started');
})