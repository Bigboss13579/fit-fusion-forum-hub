import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

// ใช้ connection แบบ callback
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oarmy_12082358203',
    database: 'fffh'
});

// เชื่อมต่อฐานข้อมูล
db.connect(err => {
    if (err) {
        console.error('cannot connect to database:', err.message);
    } else {
        console.log('database connected');
    }
});

app.use(express.json());
app.use(cors());

app.get('/post_data', (req, res) => {
    db.query('SELECT * FROM post', (err, results) => {
        if (err) {
            console.error("GET : /post_data Exception : ", err);
            return res.status(500).json({ msg: "GET : /post_data Exception" });
        }
        res.status(200).json(results);
    });
});

app.post('/post', (req, res) => {
    const { title, gender, age, comment } = req.body;

    const sql = 'INSERT INTO post (PostTitle, PosterGender, PosterAge, PostComment) VALUES (?, ?, ?, ?)';
    const values = [title, gender, age, comment];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการ INSERT:', err);
            return res.status(500).json({ error: 'ไม่สามารถเพิ่มข้อมูลได้' });
        }

        if (result.affectedRows === 0) {
            return res.status(500).json({ status: 'fail', msg: "Insert failed: affectedRows = 0" });
        }

        res.status(200).json({
            status: 'success',
            msg: "Inserted new post",
            insertId: result.insertId
        });
    });
});

app.delete('/post/:id', (req, res) => {
    const postId = req.params.id;
    const sql = 'DELETE FROM post WHERE PostID = ?';
    db.query(sql, postId, (err, result) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการ DELETE:', err);
            return res.status(500).json({ error: 'ไม่สามารถลบข้อมูลได้' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'ไม่พบโพสต์ที่ต้องการลบ' });
        }
        res.status(200).json({ status: 'success', 
        msg: 'ลบโพสต์สำเร็จ', 
        affectedRows: result.affectedRows});
    });
});


// Start server
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
