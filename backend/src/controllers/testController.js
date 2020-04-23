const con = require('../database/connectionFactory')
module.exports = {

    // método para listar
    async index (request, response){ 
        await con.query('Select * from authors',(err,rows)=>{
            if (err) throw err
            return response.json(rows);
        })
    
    }
}