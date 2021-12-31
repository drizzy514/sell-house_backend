const pg = require("../../lib/postgres");


const BANKS  = `
    select * from banks

`

const bank = () => pg(BANKS)

module.exports ={
    bank
}