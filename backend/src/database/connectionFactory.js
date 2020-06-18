require ('dotenv').config()
const mysql = require('mysql')


const con = mysql.createConnection({
    host: process.env.HOST_DB_HOMOL,
    //port: process.env.PORT_DB_HOMOL,
    user: process.env.USER_DB_HOMOL,
    password: process.env.PASSWORD_DB_HOMOL,
    database: process.env.DATABASE_DB_HOMOL,
    charset : 'utf8mb4',
    multipleStatements: true
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con