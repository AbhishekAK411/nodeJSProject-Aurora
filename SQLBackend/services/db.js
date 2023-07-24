import mysql from "mysql2";

let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "aurora"
});

conn.connect();

export default conn;