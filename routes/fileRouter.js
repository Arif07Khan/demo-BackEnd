const express=require('express');


const Router=express.Router();
const Model = require('../model/fileModel');

Router.post('/add',(req,res)=>{
    
    new Model(req.body).save().then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
Router.delete('/delete/:id',(req,res)=>{
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
Router.get('/show/:id',(req,res)=>{
    
    Model.findById(req.params.id).then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})
Router.get('/showall/',(req,res)=>{
    
    Model.find({}).then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
}) 
Router.get('/showByName/:name',(req,res)=>{
    
    Model.findOne({name:req.params.name}).then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
})



module.exports=Router;
