const {bank} = require("./model")

module.exports ={
    banks: async(req, res) => {
        const getBank = await bank()
        res.send(getBank)
    }
}