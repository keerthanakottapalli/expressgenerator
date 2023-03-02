const connection = require('../database/msqlloginDB')
const express = require('express')
const app = express()
const joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const schema = joi.object({

    username: joi.string().email().min(8).required().max(20).message("username should't exceed 20 characters"),
    password: joi.string().min(7).max(15).message("password should't exceed 15 characters").required()
})

var data = (req, res) => {
    jwt.verify(req.token, 'secret', (err, authdata) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            res.json(authdata)
        }
    })

}
var postdata = (req, res) => {
    
    var query = "select * from logindata where username='" + req.body.username + "' and password='" + req.body.password + "'"
    connection.query(query, (err, result, next) => {
        if (result.length) {
             const user = {
                username: req.body.username,
                password: req.body.password
            }
            jwt.sign(user, 'secret', { expiresIn: '30s' }, (err, token) => {
                res.json({ token })
            })
        }
        else {
            res.send("data is invalid")
        }
    })
}




var getdata = (req, res) => {
    var result = schema.validate(req.body)
    if (result.error) {

        return res.send(result.error.message)
    }
    var query = "select username from logindata where username='" + req.body.username + "'"
    connection.query(query, (err, result, next) => {
        console.log(result, "----------------")
        if (result.length) {
            res.send("data is already existed")
        }
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        msg: err
                    })
                }
                else {
                    var query = "insert into logindata(username, password) values('" + req.body.username + "','" + hash + "')"
                    connection.query(query, (err, result) => {
                        if (err) {
                            res.send(err.message)
                        }
                        else {
                            res.send(result)
                        }
                    })
                }

            })
        }
    })
}

// var data= (req,res)=>
// {
//     var result=schema.validate(req.body)
//     if(result.error)
//     {

//         return res.send(result.error.message)
//     }
//     var query= "insert into logindata(username, password) values('"+req.body.username+"','"+req.body.password+"')"
//     connection.query(query,(err,result)=>
//     {
//         if(err)
//         {
//            res.send(err.message)
//         }
//         else{
//             res.send("Inserted successfully")
//         }
//     })
// }
module.exports = { getdata, postdata, data }