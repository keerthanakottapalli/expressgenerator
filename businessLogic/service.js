const connection =require('../database/dbConnection')
const joi=require('joi')

const schema=joi.object({
    id:joi.number().integer().max(100),
    fname:joi.string().min(3).required().max(10).message("fname should't exceed 10 characters"),
    lname:joi.string().min(3).max(10).required(),
    email:joi.string().email().max(25).required(),
    phoneno: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required()
})

var data= (req,res)=>
{
    var result=schema.validate(req.body)
    if(result.error)
    {
        
        return res.send(result.error.message)
    }
    var query= "insert into empdata1(id,fname,lname,email,phoneno) values('"+req.body.id+"','"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.phoneno+"')"
    connection.query(query,(err,result)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send()
        }
    })
}
var data1=(req,res)=>
{
    var sql="select *from empdata1"
    connection.query(sql,(err,result)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}
var data2=(req,res)=>
{
    var query1="update empdata1 set phoneno='"+req.body.phoneno+"' where fname='"+req.body.fname+"'"
    connection.query(query1,(err,result)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}
var data3=(req,res)=>
{
    var query="delete from empdata1 where id='"+req.body.id+"'"
    connection.query(query,(err,result)=>
    {
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}
module.exports ={data,data1,data2,data3}