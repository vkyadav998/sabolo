/**
 * Created by vipin on 05/08/18.
 */
let express = require("express");
let app = new express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require("./server-common/config");

app.use(bodyParser.json({limit: config.LIMIT}));
app.use(bodyParser.urlencoded({limit: config.LIMIT, extended: true }));


mongoose.connect(config.DB_PATH);

let router = express.Router();

// app.use(express.static('public/'));

let appRouter = require('./routing/appRoute');
app.use('/', appRouter);

app.listen(config.PORT,function(){
    console.log(`!! server started on port ${config.PORT} !!`);
});