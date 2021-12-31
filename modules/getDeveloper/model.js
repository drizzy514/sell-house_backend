const pg = require("../../lib/postgres");

const EXISTING_USER = `
    SELECT * FROM developers WHERE developer_id = $1
`;

const allU = `
    select * from developers
`
const getDevs = ()=> pg(allU)
const exists = (username) => pg(EXISTING_USER, username);

module.exports = {
    getDevs,
  exists,
};