const path = require('path');
const morgan = require('morgan');
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
//log
app.use(morgan('combined'));

//render layout
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname, 'resources/views'));

// console.log(path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {

    res.render('home');
})
app.get('/news', function (req,res) {
    res.render('news');
})
app.get('/login', (req, res) => {
    res.render('login');
});
// 127.0.0.1 - > localhost 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});