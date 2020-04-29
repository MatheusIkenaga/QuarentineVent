const con = require('../database/connectionFactory')

module.exports={

    async create (request,response){

        const id = request.headers.authorization
        const {comment_description, post_id } = request.body

        await con.query('insert into post_comment (`comment_description`, `comment_author`,`post_id`) values (?,?,?)',
        ([comment_description,id,post_id]), (err,res)=>{
            if(err) throw err
            console.log(res.insertId)
            return response.json({"comment_id": res.insertId})
        })
    },

    async getComments(request, response){
        const post_id = request.body 
        await con.query(`Select * from post_comment where post_id = (?) order by comment_created asc`,([post_id]),(err,rows)=>{
            if (err) throw err
            return reponse.json(rows)
        })

    }
}