const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());
app.use('/img', express.static("./uploads"));


const userRoute = require('./route/userRoute');
const AddRoute = require('./route/AddMaterialroute');
const videoRoute = require('./route/videoRoute');
const blogroute = require('./route/blogroute');
const pdfroute = require('./route/pdfRoute');
const recordRoute = require('./route/record');
const schedule = require('./route/scheduleRoute');



app.use('/api',userRoute)
app.use('/api',AddRoute)
app.use('/api',videoRoute)
app.use('/api',blogroute)
app.use('/api',pdfroute)
app.use('/api',recordRoute)
app.use('/api',schedule)



module.exports = app;