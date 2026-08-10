import express from 'express';
import mysql from 'mysql';

const port = 3029;
const host = "http://localhost";

const server = express();

function db_connect()
{
    const database = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        database: "teste_js"
    });

    return database;
}

// TODO: work on more later

server.listen(port, () => {
    console.log(`Listening at ${host}:${port}`)
});