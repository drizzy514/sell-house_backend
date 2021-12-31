const express = require("express");

const Reg = require("./reg/reg");
const Check = require("./check/check");
const { GET : getDev } = require("./getDeveloper/getDeveloper");
const { POST, GET } = require("./getComplex/getComplex");
const {banks} = require("./getBanks/getBanks")
const { HOUSES} = require("./getHouse/getHouse")
const router = express.Router();

router
  .post("/reg", Reg.REGISTER)
  .post("/check", Check.CHECK)
  .get("/developer", getDev)
  .post("/complex", POST)
  .get('/banks', banks)
  .get('/complex', GET)
  .get('/house', HOUSES)

module.exports = router;
