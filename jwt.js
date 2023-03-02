const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')

app.get('/verify',verifytoken,(req,res)=>
{
    jwt.verify(req.token,'secret',(err,authdata)=>
    {
        if(err)
        {
            res.sendStatus(403)
        }
        else{
            res.json({
                message:'created..',
                authdata
            })
        }
    })
    res.json({
        
        message:'hello'
    })
})
app.post('/token',(req,res)=>{
    const user={
        "name":"Vandanarani",
        "skill":"node.js",
        "age":22
    }
    jwt.sign({user:user},'secret',{expiresIn :'30s'},(err,token)=>
    {
        res.json({token})
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

app.listen(4001,()=>console.log("connected on port4001"))