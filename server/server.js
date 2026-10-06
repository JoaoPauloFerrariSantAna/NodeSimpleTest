import express from 'express';
import mysql from 'mysql';

const port = 3029;
const host = "http://localhost";

const server = express();

function db_connect()
{
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        database: "teste_js"
    });
}

function db_test_connection()
{
    const conn = db_connect();

    conn.ping((e) => {
        if(e) throw e;
    });
}

// TODO: work on more later

server.listen(port, () => console.log(`Listening at ${host}:${port}`));