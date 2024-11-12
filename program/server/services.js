const mysql = require('mysql');
const connection = mysql.createConnection({


    host: 'localhost',
    user: 'root'
    password: 
    database: 'ArchiveOfAlexandria'


})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');

});

const dbURL = process.env.DB_URL || "mysql://localhost";

var services_sql = function(app){

    app.post('/', function(req,res) {
    console.log('In MySQL Write Record');

    var data = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
        media: req.body.media

    };

    connection.query("INSERT INTO books SET ?", data, function(err,results){
        if(err){
            throw err;
        }else {
            console.log("Inserted new  book record");
            return res.status(201).send(JSON.stringify({msg:"SUCCESS"}));
        }
    });


});
    
    app.get('/read-records-sql', function(req,res){
        connection.query("SELECT * FROM books", function(err,rows){
            if(err){
                throw err;
            }else{
                console.log("Read Records");
                return res.status(201).send(JSON.stringify({msg:"SUCCESS", books:rows}));

            }
        });
    });

    }

    module.exports = services_sql;


