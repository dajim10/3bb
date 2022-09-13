const express = require('express');
const multer = require("multer");
// const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
app.use(bodyParser.json());
require('dotenv').config();
app.use(cors());

// app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

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
    
    // app.use([
    //     express.static("public"),
    //     express.json(),
    //     cors(),
    //     upload.array("files")
    // ]);
    
app.post('/upload',upload.single('file'),(req,res) => {
    res.send(req.file)
})


// app.post('/upload',(req,res) => {
    
//     if (req.files === null) {
//         return res.status(400).json({msg : 'No files were uploaded'});
//     }
//     const file = req.files.file;
//     // console.log(file);
//     file.mv(`${__dirname}/public/${file.name}`,err=>{
//         if (err) {
//             console.error(err);
//             return res.status(500).json({msg :'server error'});
//         }
//         res.json({fileName: file.name,filePath : `${file.name}`})
//     })
// })



app.post("/public", (req, res) => {
    // console.log('posting Image to Server');
    // console.log(req.files);
    
    // console.log(req.files[0].path)
    // const mainImage = req.files[0].path
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
    host:process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
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

app.post('/insert',(req, res) => {
    const content_name = req.body.content_name;
    const content_detail = req.body.content_detail;
    
    const sdgID = req.body.sdg_number;
    
    // const image = 'http://localhost:3000/public/'+req.body.image;
    const image = req.body.image;
    
   


    const data = req.body;
    // res.send(content_name)
    const sqlInsert = "INSERT INTO content (content_name,content_detail,image) VALUES (?, ?, ?)";
    con.query(sqlInsert,[content_name,content_detail,image],(err, result) => {
        if(err) {
            throw err;
        }
        else {
            // console.log(result.insertId);
            const ContentID = result.insertId;
            
            sdgID.sort(function(a,b){return a - b}).forEach(function(number) {
                
                con.query("INSERT INTO content_sdg(content_id, sdg_number) VALUES (?,?) ",
                [ContentID,number],(err,result)=>{
                    if (err) throw err;
                }
            )})
            // sdg_id.forEach(function(num) {
            //     // console.log(sdg_id,num);
            //     con.query("INSERT INTO content_sdg (content_id,sdg_number) VALUES (?,?)"
            // ,[ContentID,num],(err,result)=>{
            //         if (err) throw err;
            //     })
             
            // })

            // console.log(sdgID)
                 // test upload picture from router /insert in one time post

            // if (req.files === null) {
            //     return res.status(400).json({ msg: 'No files were uploaded' });
            // }
            // const file = req.files[0].file;
            // // console.log(file);
            // // const file = req.files;
            // file.mv(`${__dirname}/public/${file.name}`, err => {
            //     if (err) {
            //         console.error(err);
            //         return res.status(500).json({ msg: 'server error' });
            //     }
            //     res.json({ fileName: file.name, filePath: `${file.name}` })
            // })
                 //******** end test by Macky */
            
            res.send(result)
        }
       
        }

    );
})

app.delete('/deleted/', function(req, res) {
    const id = req.params.id;
    const mysqlDelete = "DELETE FROM content WHERE id =?"
    if (id==='undefined') {
        res.json({ msg: 'undefined'})
    }else {
        con.query(mysqlDelete,[id],function(err, result) {
            if (err) {
                throw err;
            }else {
                res.send(result)
            }
        })
    }
})


app.get('/content',(req, res)=>{
    con.query('SELECT * FROM content',(err, result) => {
        res.send(result)
    })
})




app.get('/getAll', (req, res) => {
   

    con.execute(`SELECT 
      content_id,content_name,image,content_detail,
      JSON_ARRAYAGG(sdg_number) AS 'sdg_number', JSON_ARRAYAGG(color) AS 'color' 
      FROM content_sdg 
      LEFT JOIN content ON content.id=content_sdg.content_id
      GROUP BY content_id `,function(err, result) {
    if(err) throw err;
    res.send(result);
})})







app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);


