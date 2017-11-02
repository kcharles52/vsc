const express = require('express');
const stripe = require('stripe')('sk_test_2e4w1nQmLwRH4WlfVR3DFJS9');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
//handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Static folder
app.use(express.static(`${__dirname}/public`));

//Index Route
app.get('/',(req,res)=>{
    res.render('Index');
});
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});