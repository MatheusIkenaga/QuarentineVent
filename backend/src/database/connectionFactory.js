const mysql = require('mysql')

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mysql-test',
    password: 'Mysqltest123',
    database: 'sitepoint' 
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con