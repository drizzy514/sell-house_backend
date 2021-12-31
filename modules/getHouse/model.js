const pg = require("../../lib/postgres");

const EXISTING_USER = `
    SELECT * FROM houses WHERE house_complex = $1
`;
const HOUSE = `
  SELECT * FROM houses
`

const exists = (id) => pg(EXISTING_USER, id);
const house = () => pg(HOUSE)
module.exports = {
  exists,
  house
};