const mysql = require('mysql');
var express = require('express');

try {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'studenttest1'
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database');
    });

    db.on('error', (err) => {
        console.error('Database error:', err);
    });

    module.exports = db;
} catch (error) {
    console.error("Error setting up database connection:", error);
}
