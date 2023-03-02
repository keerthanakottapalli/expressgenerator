const mysql=require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dummy'
})

connection.connect((err,result)=>
{
    if(err)console.log(err);
    console.log("connected")
})

module.exports =connection