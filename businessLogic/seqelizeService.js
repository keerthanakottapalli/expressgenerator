
const { DataTypes } = require('sequelize')
const serve = require('../database/sequelizeDB')

const data1 = serve.define('data', {
    name: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.INTEGER,
    }
})
serve.sync().then(() => {
    console.log('data table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


var postdata = (req, res, next) => {
    serve.sync().then(() => {

        data1.create({
            name: req.body.name,
            city: req.body.city,
            salary: req.body.salary,
        })
        res.send("data entered successfully")

    })

        .catch((error) => {
            console.error('unable to connect', error);
        })
}
var getAll = (req,res) => {
    serve.sync().then(() => {

        data1.findAll()
        res.send("Student data fetched successfully!'")

    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}


var getOne = (req,res) => {
    serve.sync().then(() => {

        data1.findOne({
            where: {
                id: req.body.id
            }
        })
        res.send("Student record Inserted successfully!'")

    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

var deletedata = (req, res, next) => {
    serve.sync().then(() => {

        data1.destroy({
            where: {
                fname: req.body.fname
            }

        })
        res.send("Data deleted")

    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
}

var updatedata = (req, res) => {
    serve.sync().then(() => {
        data1.update(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                age: req.body.age
            },
            { where: { age: req.body.age } }
        )
        res.send("Data updated")
    }).catch((error) => {
        console.error('Unable to update : ', error);
    });

}




module.exports = { postdata, getOne, getAll, updatedata, deletedata }