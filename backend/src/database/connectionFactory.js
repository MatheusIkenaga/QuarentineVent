const mysql = require('mysql')

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'quarentinewhisper',
    password: '4n~e$p:a36X%+k#N',
    database: 'QUARENTINEWHISPER' ,
    multipleStatements: true
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con