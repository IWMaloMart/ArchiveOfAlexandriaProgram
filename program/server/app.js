const express = require('express');
const mysql = require("mysql");
//const cors = require('cors');
const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hell0K1tty123',
    database: 'ArchiveOfAlexandria'
});

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("MySql Connected")
    }
})


app.get("/", (req,res) => {
    res.send("<h1> Hello World</h1>")
});

app.listen(5005, () =>{
    console.log("Server started: Port 5005");



})



/*const path = require("path");
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/client", express.static(path.resolve(__dirname + "/../client/")));

//server making
var server;
var port = process.env.PORT || process.env.NODE_PORT || 1337;

//Page Listeners
var router = require("./router.js");
router(app);

//Service listeners
var services_sql = require("./services_sql.js");
services_sql(app);

//listen
server = app.listen(port, function(err){
    if(err){
        throw err;
    }
    console.log("Listening on port " + port);
}


) */