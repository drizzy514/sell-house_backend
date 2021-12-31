const pg = require("../../lib/postgres");

const REGISTER = `
    INSERT INTO
        users(
        user_name, 
        user_password,
        user_email
    )
    VALUES ($1, $2, $3)
    RETURNING
            *
`;

const EXISTING_USER = `
    SELECT * FROM users WHERE user_email = $1
`;

const exists = (email) => pg(EXISTING_USER, email);
const register = (username, password, email) =>
  pg(REGISTER, username, password, email);

module.exports = {
  register,
  exists,
};
