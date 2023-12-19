const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: ["https://konnecct-elearning.onrender.com"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        masAge: 1000*60*60*24
    }
}))

const db = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user:"sql3659622",
    password:"57jf3XmS5Y",
    database: "sql3659622"
})

console.log('connected to the database');

app.get('/', (req, res)=> {
    if(req.session.username){
        return res.json({valid: true, username: req.session.username});
}else{
    return res.json({valid: false});
}})

app.post('/signup', (req, res)=> {
    const sql = "INSERT INTO usersdata (`firstName`, `lastName`, `birthdate`, `email`, `password`, `country`) VALUES (?,?,?,?,?,?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.birthdate,
        req.body.email,
        req.body.password,
        req.body.country
    ];
    db.query(sql, values, (err, data) => {
        if (err){
            console.log(err);
            return res.json({Message:"Error in Node"});
        }
        
        console.log(data);
        return res.json(data);
    });
})

app.post('/signin', (req, res)=> {
    const sql= "SELECT * from usersdata WHERE `email`= ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if (err){
            return res.json({Message:"Error inside the server"});
        }
        if(data.length > 0 ){
            req.session.username = data[0].firstName;
            console.log(req.session.username);
            return res.json({Login: true});
        }else{
            return res.json({Login: false});
        }
    });
})

app.listen("8081", ()=>{
    console.log("Connected to the server");
})
