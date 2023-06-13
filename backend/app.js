const express = require('express');

const app = express();
const products = require('./routes/routes');

const sequelize = require('./utils/database');
const  Cors = require('cors');

const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(Cors());
app.use(products);

sequelize.sync().
then(res=>
    app.listen(3000)
).catch(err=>console.log(err));

