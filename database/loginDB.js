const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize(
    'dummy','root','root',{
        host:'localhost',
        dialect:'mysql'
    }
)
sequelize.authenticate().then(()=>
{
    console.log('connection has been established successfully');
}).catch((error)=>
{
    console.error('unable to connect',error);
})
module.exports =sequelize;