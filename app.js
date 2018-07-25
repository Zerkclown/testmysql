const express = require('express')
const app = express()
const mysql = require('mysql')

app.get('/', (req, res) => {

    //for testing
    console.log("root directory is called...")

    const connection = mysql.createConnection({
        host: '192.168.235.1',
        user: 'b00057412',
        password: 'b00057412',
        database: 'one'
    })

    // for server
    console.log("connection established with server...")


    connection.connect(function(error){
        
    })

    //------------------
    // connection.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     con.query("SELECT * FROM jiro", function (err, result) {
    //       if (err) throw err;
    //       console.log("Result: " + result);
    //     });
    //   });
    //-----------------

    connection.query("SELECT * FROM jiro", (err, rows, fields) => {
        res.json(rows)
        //for testings
        console.log(err)
        console.log(rows)
        console.log("fetching the db...")
    })

    console.log("done")

    // res.end()
})

app.listen(3004, () => {
    console.log("server is up and listening on 3004")
})