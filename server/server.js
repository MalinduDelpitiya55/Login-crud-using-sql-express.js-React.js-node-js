const express = require("express");
const db = require("./config/dbconfig.js");
const cors = require("cors");
const path = require("path");


const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use('/create', (req, res) => {
    const sql = "INSERT INTO studentdetails ( `contactNo`, `fname`, `lname`) VALUES (?,?,?)";
    const values = [
        req.body.contactNo,
        req.body.fname,
        req.body.lname
    ];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting student details:", err);
            return res.status(500).json({ message: "Something unexpected has occurred." });
        }
        console.log("Student added successfully");
        return res.status(200).json({ success: "Student added successfully" });
    });
});

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Application Started on port ${PORT}`);
});
