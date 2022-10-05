const express=require('express');
const cors = require('cors');


const app=express();

const port = process.env.PORT || 4000;

app.use(cors({origin : ['https://demofrontend01.herokuapp.com', 'http://localhost:3000']}));
app.use(express.json());

const fileRouter=require('./routes/fileRouter')
const utilRouter=require('./routes/util')


app.use('/util',utilRouter);
app.use('/file',fileRouter);

app.use(express.static('./static/uploads'))

app.listen(port,()=>{
    console.log('Express Started');
})