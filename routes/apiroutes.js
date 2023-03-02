var route=require('../businessLogic/service')
const express=require('express')
const app=express.Router()

app.post('/api/empdata',(req,res,next)=>
{
    route.data(req,res, function(data)
    {

    })
})
app.get('/api/empdata',(req,res,next)=>
{
    route.data1(req,res, function(data1)
    {
        
    })
})

app.put('/api/empdata',(req,res,next)=>
{
    route.data2(req,res, function(data2)
    {

    })
})

app.delete('/api/empdata',(req,res,next)=>
{
    route.data3(req,res, function(data3)
    {

    })
})
module.exports = app