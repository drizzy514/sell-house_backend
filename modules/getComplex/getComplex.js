const model = require("./model")

module.exports = {
    POST: async (req, res) => {
        const {id} = req.body
        console.log(id)
        if(id) {
            const data = await model.exists(id)
            res.send(data)
        } 

    },
    GET: async (req, res) => {
        const complex =  await model.complex()
        res.send(complex)
    }
}