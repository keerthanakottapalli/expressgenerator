const api=require('../businessLogic/loginService')
const express=require('express')
const app=express.Router()

app.get('/api/empdata',(req,res)=>
{
    api.getAll(req,res, function(getAll)
    {
        
    })
})

app.post('/api/empdata',(req,res)=>
{
    api.getAll(req,res, function(getAll)
    {

    })
})



module.exports = app