const { model,Schema }=require('../connection')

const FileType=new Schema({
    name: String,
    type: String,
    size: String,
    preview: String,
})

module.exports = model('File', FileType);