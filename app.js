require("dotenv").config();
require("./config/database").connect();

const User = require('./model/user');
const auth = require("./middleware/auth");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

app.post("/", auth,(req, res) => {
    console.log("just learning jwt implementation in nodejs! Welcome!")
})

app.post("/register", async (req,res) => {
    
    try {
        //get all the inputs
        const {first_name, last_name,email,password} = req.body;

        //validate the inputs
        if (!(email && password && first_name && last_name)) {
           res.status(400).send("all fields are required!") 
        }

        //check if user already exists.
        if (await User.findOne({email})) {
            return res.status(409).send(`user with email address ${email} already exists, please login`)
        }

        //create user in db and encrypt the password aswell
        const user = await User.create({
            first_name,
            last_name,
            email:email.toLowerCase(),
            password: await bcrypt.hash(password,10),
        });

        const token = jwt.sign({user_id:user._id, email},process.env.JWT_SECRET,{expiresIn: "2h"});

        //save user token
        user.token =token;

        //return the newly created user
        res.status(201).json(user);
    } catch (error) {
        console.log(error); 
    }
});

app.post("/login", async (req,res) => {

    try {
        // get user inputs
        const {email, password} = req.body;

        //validate user inputs
        if (!(email && password)) {
            res.status(400).send("all inputs are required!");
        }

        //check if we have the user in the db
        const user = await User.findOne({email});
        
        if (user && (await bcrypt.compare(password, user.password))) {
            //create token
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.JWT_SECRET,
                {expiresIn: "2h"}
            );

            //save user token
            user.token = token;

            //return user
            res.status(200).json(user);
        } else {
            res.status(400).send("wrong username or password")
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = app;