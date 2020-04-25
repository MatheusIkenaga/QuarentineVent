const con = require('../database/connectionFactory')

module.exports={

    async index (request,response){
        await con.query('Select * from post order by post_created desc',(err,rows)=>{
            if (err) throw err
            return response.json(rows);
        })
    },

    async create  (request, response){
        const id = request.headers.authorization
        const {post_title, post_description } = request.body

        if (!request.headers.authorization){
            return response.status(400).json({error: 'Not Logged in'})   
        }
        
        await con.query ('INSERT INTO post (`post_author`, `post_title`, `post_description`) values (?,?,?)',
        ([id, post_title, post_description]),(err,res)=>{
            if(err) throw err
            const message = ({"post_id" : res.insertId})

            console.log(message)
            return response.json(message)
        } )  

    }


    

}