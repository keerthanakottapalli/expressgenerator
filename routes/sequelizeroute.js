const apis=require('../businessLogic/seqelizeService')
const express=require('express')
const app=express.Router()

app.post('/api/empdata',(req,res)=>
{
    apis.postdata(req,res, function(postdata)
    {

    })
})
app.get('/api/empdata/:id',(req,res)=>
{
    apis.getOne(req,res, function(getOne)
    {
        
    })
})
app.get('/api/empdata',(req,res)=>
{
    apis.getAll(req,res, function(getAll)
    {
        
    })
})

app.put('/api/empdata',(req,res,next)=>
{
    apis.updatedata(req,res, function(updatedata)
    {

    })
})

app.delete('/api/empdata',(req,res,next)=>
{
    apis.deletedata(req,res, function(deletedata)
    {

    })
})
module.exports = app