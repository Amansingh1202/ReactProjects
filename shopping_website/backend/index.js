const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

const cors = require('cors');

var corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amansingh@1202',
    database: 'shopping'
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log("Connection succeeded");
    else
        console.log("DB connection failed\nError::"+JSON.stringify(err,undefined,2))
});

//GET user data as per Email Id
app.get('/user/:email',(req,res)=>{
    mysqlConnection.query('SELECT  * FROM joinus WHERE Email = ?',[req.params.email],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Add a user

app.post('/joinus',(req,res)=>{
    var Email = req.body.Email;
    var Password = req.body.Password;
    mysqlConnection.query('INSERT INTO joinus SET ?',req.body,(err,rows,fields)=>{
        if(err)
            res.status(500).send({error:'Something Failed'});
        else
            res.json({status:'success'})
    })
});
