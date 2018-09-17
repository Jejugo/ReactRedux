const express = require('express');
const baseRoutes = require('./routes/base-routes');

var app = express();
app.set('view engine', 'ejs');

app.use(baseRoutes);

app.listen(3000, ()=>{
    console.log("App is ruinning...");
});