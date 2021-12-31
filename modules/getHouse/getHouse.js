const model = require("./model")

module.exports = {
    POST: async (req, res) => {
        const {id} = req.body
        if(id) {
            const data = await model.exists(id)
            res.send(data)
        }
   
    },
    HOUSES: async (req, res) => {
        const houses = await model.house()
        res.status(200).send(houses)
    }
} 