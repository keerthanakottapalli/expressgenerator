const { DataTypes } = require('sequelize')
const service=require('../database/loginDB')
const joi=require('joi')

const schema=joi.object({
   
    username:joi.string().email().min(8).required().max(20).message("username should't exceed 20 characters"),
    password:joi.string().min(7).max(15).message("password should't exceed 15 characters").required()
    
    
})

const loginDB = service.define('logininfo', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        
        
    },
    password: {
        type: DataTypes.STRING,
    }
})
service.sync().then(() => {
    console.log('login table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

var getAll = (req,res) => {

    var result=schema.validate(req.body)
    if(result.error)
    {
        
        return res.send(result.error.message)
    }
    service.sync().then((result) => {

        data1.findAll()
        res.send(result.length)

    }).catch((error) => {
        service.sync().then(() => {

            loginDB.create({
                username: req.body.username,
                password: req.body.password
            })
            res.send("data entered successfully")
            console.log()
    
        })
    
            .catch((error) => {
                res.send('unable to connect', error);
            })
    });
}




module.exports = {  getAll }