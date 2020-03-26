
const express = require('express');
const router = express.Router();

const mysql = require('mysql');

//mysql connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yoni1343',
    database : 'people'
  });

router.post('/', (req,res,next)=>{

    const logs = {
        longitude: req.body.longitude, 
        latitude: req.body.latitude,
        people_id: req.body.people_id, 
        date: req.body.date, 
        user_id: req.body.user_id 
    };


    res.status(201).json({
        message: 'Handeling POST requests to /logs',
        foundPeople: logs
    });


    var sql = "INSERT INTO logs (longitude,latitude,people_id,date,user_id) VALUES ("+req.body.longitude+","+req.body.latitude+",'"+req.body.people_id+"','"+req.body.date+"','"+req.body.user_id+"')";

    console.log(sql);
    connection.query(sql, function (error, results) {
        if (error) throw error;
        // res.send(results)
        console.log("1 record inserted");
      });

});



router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: logs
    });
});



module.exports = router;
