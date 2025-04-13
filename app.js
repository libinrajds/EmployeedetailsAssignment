const express = require('express');
const app = new express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/views');
console.log(__dirname);
app.use(express.static('public'))
const nav=[
    {name:'Home',link:'/employee'},
    {name:'Add Employee',link:'/employee/addform'}
]
const basicRoutes = require('./routes/basicRoutes')(nav);
app.use('/employee',basicRoutes) 



app.listen(3000, ()=>{
    console.log("Server running");
}); 