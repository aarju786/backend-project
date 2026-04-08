const usermodel = require('../Model/usermodel');
const {validname, validemail, validpassword} = require("../validation/authvalidation");
const bcrypt = require("bcrypt");


exports.createuser = async (req, res) => {
    try {
        const data = req.body;
        const { name, email, password } = data;

        if (!name) {
            return res.status(400).send({ status: false, message: "name is required" });
        }
        if (!validname(name)) {
            return res.status(400).send({ status: false, message: "name is not valid" });
        }
        if (!email) {
            return res.status(400).send({ status: false, message: "email is required" });
        }
        if (!validemail(email)) {
            return res.status(400).send({ status: false, message: "email is not valid" });
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "password is required" });
        }
        if (!validpassword(password)) {
            return res.status(400).send({ status: false, message: "password is not valid" });
        }
        const DB = await usermodel.create(data);

        return res.status(201).send({ status: true,
             msg: "user created successfully",
              data: DB });
    } catch (error) {
        return res.status(500).send({ status: false,
             msg: error.message });
    }
}