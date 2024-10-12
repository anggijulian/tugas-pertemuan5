const express =  require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'pertemuan5'
});

connection.connect((err) => {
    if(err) {
        console.error("Terjadi kesalahan dalam kondeksi ke MySQL:", err.stack);
        return;
    }
    console.log("Koneksi MySQL berhasil dengan id" + connection.threadId)
});

app.set('view engine');

//ini adal routing (Cruate, Read, Update, Delete)

//Read
app.get('/', (req, res) => {
    const query = 'SELECT * FROM user';
    connection.query(query, (err, results) => {
        res.render('index',{users: result});
    });
});

//create / input / insert
app.post('/add' (req, req) => {
        const {name, email, phone } = req.body;
        const query = 'INSERT INTO user (name, email, phone) VALUES (?,?,?,)' ;
        connection.query(express.query, [name, email, phone], (errr, resut) => {
            if(err) throw err;
            res.redicrect('/')
        });
});

app.listen(3000,() =>{
    console.log("Server nerjalan di port 300, buka web melalui http://localhost:300")
})