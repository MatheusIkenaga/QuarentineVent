const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'mysql669.umbler.com',
    port: '41890',
    user: 'quarentinew',
    password: 'senhadobanco123',
    database: 'quarentinew',
    multipleStatements: true
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con