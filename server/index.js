const express = require('express');
const app = express();
const PORT = 8080
const cors = require('cors');

//Routes
const asian = require('./routes/asian');
const vegan = require('./routes/vegan');
const western = require('./routes/western');
const mix = require('./routes/mix');


//Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});


app.use('/asian', asian);
app.use('/vegan', vegan);
app.use('/western', western);
app.use('/mix', mix)


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})