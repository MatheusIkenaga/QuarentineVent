const con = require('../database/connectionFactory')

module.exports={

    async create (request, response){

        const{user_nickname,user_password, user_email} = request.body
        await con.query('insert into login (`user_nickname`,`user_password`,`user_email`) values (?,?,?)',

        ([user_nickname, user_password, user_email]),(err,res)=>{
            if (err) throw err
            console.log({"user_id": res.insertId})
            return response.json({"user_id": res.insertId})
        })

    },

    async check (request,response){
        const{user_email,user_password} = request.body

        await con.query('select * from login where user_email = (?)', 
        ([user_email]),(err,res)=>{
            if (err) throw err

            if(!res[0]) {
                // user_email does not exist in db
                return response.status(400).json({error: 'Fail to Log in'})   
            }

        
            if (user_password == res[0].user_password){
                // loggin OK
                console.log(`USER: ${res[0].user_id} logged in at ${new Date()}`)
                return response.json({"user_id": res[0].user_id})

            }else{
                // user_password wrong
                return response.status(400).json({error:'Fail to Log in'})
            }
            
        })

    },







}