var route=require('../businessLogic/mysqlloginservice')
const express=require('express')
const app=express.Router()

app.post('/token',(req,res,next)=>
{
    route.postdata(req,res, function(postdata)
    {

    })
})

app.post('/api/logindata',(req,res,next)=>
{
    route.getdata(req,res, function(getdata)
    {

    })
})

app.get('/api/logindata', (req,res,next)=>
{
    route.getdata(req,res, function(getdata)
    {

    })
})
app.post('/verify',verifytoken,(req,res)=>
{
    route.data(req,res, function(data)
    {

    })
})
function verifytoken(req,res,next)
{
    const bearerHeader=req.headers['authorization']
    if(typeof bearerHeader!=='undefined'){
        const bearer=bearerHeader.split(' ')
        const bearerToken=bearer[1]
        req.token=bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}
module.exports = app