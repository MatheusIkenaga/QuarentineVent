const con = require('../database/connectionFactory')
const commentController = require('./commentController')

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

    },

    async indexFull(request,response){
        await con.query('Select * from post order by post_created desc',(err,rows)=>{
            if (err) throw err

            var url = 'http://localhost:3000/api/post/comment'
            
            rows.forEach((row) => {
                row.comments = ([
                    
                    //FIX THIS, NEET TO RETURN COMMENTS FROM POST

                    commentController.getComments(row.post_id)

                    /*
                    var request = require('request');

                    var url = 'http://localhost:8103/rest/getUser/';

                    var paramsObject = { userId:12345 };

                    request({url:url, qs:paramsObject}, function(err, response, body) {
                    if(err) { console.log(err); return; }
                    console.log("Response: " + response.statusCode);
                    });
                    */




                    
                ])
                
            });

            //rows.push([{"comment": "test"}])
            
            //console.log(rows)
            
            
            
            return response.json(rows)
        })
    } 

    

}