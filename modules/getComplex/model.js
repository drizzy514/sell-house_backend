const pg = require("../../lib/postgres");

const EXISTING_USER = `
    SELECT * FROM complexs WHERE complex_developer = $1
`;

const COMPLEX = `
  SELECT * FROM complexs
`


const exists = (id) => pg(EXISTING_USER, id);
const complex = () => pg(COMPLEX)
module.exports = {
  exists,
  complex
};