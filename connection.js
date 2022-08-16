const mongoose=require('mongoose');

const demodb="FileDB";
const url=`mongodb+srv://arifkhan:9839808024@cluster0.kfgunhn.mongodb.net/${demodb}?retryWrites=true&w=majority`

mongoose.connect(url)
.then((result) => {
    console.log("DataBase Demo Connected");
})
.catch((err) => {
    console.error(err);
});

module.exports =mongoose;