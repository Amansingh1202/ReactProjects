const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

const cors = require('cors');

var corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus: 200
}

app.use(cors(corsoption));

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restful_db'
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log("Connection succeeded");
    else
        console.log("DB connection failed\nError::"+JSON.stringify(err,undefined,2))
})
// GET user data
app.listen(3000,()=>console.log('Express server is running at port no:3000'))
app.get('/user',(req,res)=>{
    mysqlConnection.query('SELECT  * FROM user_data ',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});
//GET user data as per Email Id
app.get('/user/:email',(req,res)=>{
    mysqlConnection.query('SELECT  * FROM user_data WHERE Email = ?',[req.params.email],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete a user data

app.delete('/user/:email',(req,res)=>{
    mysqlConnection.query('DELETE FROM user_data WHERE Email = ?',[req.params.email],(err,rows,fields)=>{
        if(!err)
            res.send('Deleted Succuessfully');
        else
            console.log(err);
    })
});


//Add a user


app.post('/user',(req,res)=>{
    var Name = req.body.Name;
    var Email = req.body.Email;
    var Password = req.body.Email;
    mysqlConnection.query('INSERT INTO user_data SET ?',req.body,(err,rows,fields)=>{
        if(err)
            res.status(500).send({error:'Something Failed'});
        else
            res.json({status:'success'})
    })
});

