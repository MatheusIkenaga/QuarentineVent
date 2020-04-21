module.exports = {

    // método para listar
    async index (request, response){ 
        return await response.json("TEST");
    }
}