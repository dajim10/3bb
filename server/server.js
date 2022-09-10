const express = require('express');
const multer = require("multer");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
app.use(bodyParser.json());
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/");
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.split(".");
        ext = ext[ext.length - 1];
        cb(null, `${Date.now()}.${ext}`);
    }
});
const upload = multer({ storage: storage });
// var corsOptions = {
//     origin: "http://172.16.163.89:5173",
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use([
    express.static("public"),
    express.json(),
    cors(),
    upload.array("files")
]);

app.post("/public", (req, res) => {
    console.log('posting Image to Server');
    console.log(req.files);
    // con.query(`INSERT INTO content()`)
    if (req.files.length > 0) {
        res.json(req.files[0]);
    }
});

app.post('/insertcontent',(req, res) => {
    console.log(req)
})


// const con = mysql.createConnection({
//     host: 'linuxdb2.rmutsv.ac.th',
//     user: 'root',
//     password: ',miLiu;b=yp48',
//     database: 'HRH'
// });

// const con = mysql.createConnection({
//     host: 'linuxdb2.rmutsv.ac.th',
//     user: 'root',
//     password: ',miLiu;b=yp48',
//     database: 'imfdb'
// });

// const con = mysql.createConnection({
//     host:'172.16.162.4',
//     user: 'sdgs_web',
//     password: 'H5VgsjX0hgZdsMnT',
//     database:'sdgs_web',
//     port : 3306
// })
const con = mysql.createConnection({
    host:'172.16.163.89',
    user:'root',
    password: '1234',
    database:'sdg'
})


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
}
);

// app.get('/api/:search', (req, res) => {
//     const {search} = req.params;
    
//     res.send(req.params);
// }   
// );

app.get('/sdgs',(req, res) => {
    con.query(`SELECT * FROM sdg_goal`,function(err, result){
        if (err) throw err;
        res.send(result);
    })
})


app.get('/search/:search', (req, res) => {
    const search = "%"+req.params.search+"%"
    // console.log(search);
    con.query(`SELECT 
      content_id,content_name,image,
      JSON_ARRAYAGG(sdg_number) AS 'sdg_number', JSON_ARRAYAGG(color) AS 'color' 
      FROM content_sdg 
      LEFT JOIN content ON content.id=content_sdg.content_id
      WHERE content_name LIKE ?
      GROUP BY content_id `, [search],function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})


app.get('/api/attractions',(req,res,next) => {
    const page = parseInt(req.query.page);
    const per_page = parseInt(req.query.per_page);

    const start_idx = (page - 1) * per_page;
    con.query(
        `SELECT content_id,content_name,image,
      JSON_ARRAYAGG(sdg_number) AS 'sdg_number', JSON_ARRAYAGG(color) AS 'color' 
      FROM content_sdg 
      LEFT JOIN content ON content.id = content_sdg.content_id
      GROUP BY content_id LIMIT ?, ?`,
    [start_idx,per_page],
    function (err, results,field){
        console.log(results);
        res.json({results: results});
    })
})



app.get('/getAll', (req, res) => {
   

    con.execute(`SELECT 
      content_id,content_name,image,
      JSON_ARRAYAGG(sdg_number) AS 'sdg_number', JSON_ARRAYAGG(color) AS 'color' 
      FROM content_sdg 
      LEFT JOIN content ON content.id=content_sdg.content_id
      GROUP BY content_id `,function(err, result) {
    if(err) throw err;
    res.send(result);
})})

// app.get('/search/:id', (req, res) => {
//     const id = req.params.id;
//     // res.send(id);
//     con.query(`SELECT 
//       content_id,content_name,image,
//       JSON_ARRAYAGG(sdg_number) AS 'sdg_number', JSON_ARRAYAGG(color) AS 'color' 
//       FROM content_sdg WHERE INLIST(sdg_number,${id})
//       LEFT JOIN content ON content.id=content_sdg.content_id
//       GROUP BY content_id; `, function (err, result) {
//         if (err) throw err;
//         res.send(result);
//     })
// })




app.post('/add', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO users SET ?', data, function(err, result) {
        if (err) throw err;
        res.send(result);
    }
    );
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);


