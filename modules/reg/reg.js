const model = require("./model");
const bcrypt = require("bcrypt");
const { signUser } = require("../../lib/jwt");

module.exports = {
  REGISTER: async (req, res) => {
    try {
      const { name, password, email } = req.body;
      if (name && password && email) {
        Number(password);
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const existing = await model.exists(email);

        if (existing.length == 1) {
          res.status(400).send("Already exists...");
          return;
        }

        const newUser = await model.register(username, bcryptPassword, phone);
        if (newUser) {
          res.status(201).json({
            message: "User created",
            token: signUser({
              user_id: newUser[0].user_id,
              is_admin: newUser[0].is_admin,
            }),
          });
        }
      } else {
        res.send(json({ "message": "inputs not correct" }))
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
