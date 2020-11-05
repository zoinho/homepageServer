var express = require('express');
var fs = require('fs');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use(express.json())
app.listen(3000, ()=> {
    console.log("server is running")
})



app.get('/education', (req, res) => {
    fs.readFile('serverFiles/education.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
            console.log('Education response sent')
        }, 1000)
    })
})

app.put('/update-education', (req, res) => {
    let file;
    let change;
    fs.readFile('serverFiles/education.json', (err, resp) => {
        file = JSON.parse(resp);
    })
    change = req.body;
    file = {...file, ...change} 
    fs.writeFileSync('serverFiles/education.json', JSON.stringify(file), error => {
        if(error) {
            throw error
        }
        console.log("data written to file");
    })
    res.status(200).json(file)
})

app.get('/skills', (req, res) => {
    fs.readFile('serverFiles/skills.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})
app.get('/hobbies', (req, res) => {
    fs.readFile('serverFiles/hobbies.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})
app.get('/experience', (req, res) => {
    fs.readFile('serverFiles/experience.json', (err, resp) => {
        let parsedResp = JSON.parse(resp);
        setTimeout(()=> {
            res.send(parsedResp);
        }, 1000)
    })
})