const server= require('../businessLogic/server')
const express= require('express')
var data = express.Router()

data.get('/api/server',(req,res)=>
{
    server.a(req,res, function(a)
    {

    })
})
module.exports= data