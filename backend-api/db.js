import mysql from 'mysql';

export const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Bb0yblue$13",
        database: "blog"
    }
);