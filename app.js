
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mysql = require('mysql');

//mysql connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yoni1343',
    database : 'people'
  });

  app.listen(3501, () => {
    console.log('Go to http://localhost:3501/logs to see posts');
   });

   app.get('/logs', function (req, res) {
    connection.query('SELECT * FROM logs', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});




const peopleRoutes = require('./api/routes/people');
// const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "*"
        );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'POST, GET');
        return res.status(200).json({});
    }
    next();
});


//Routes that should handle requests
app.use('/logs', peopleRoutes); 
// app.use('/orders', orderRoutes); 

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
error:{
    message: error.message,
    errorNo: 500
}
  });
});

module.exports = app;
