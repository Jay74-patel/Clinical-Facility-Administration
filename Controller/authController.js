const bycrypt = require('bcrypt')
const User = require('../Models/userSchema')
const jwt = require('jsonwebtoken');
const { genrateToken, verifyToken } = require('../utils/jwtutils')
const nodemailer = require('nodemailer');
// const transporter = require('../utils/nodeMailer')


exports.Register = async (req, res) => {

    try {
        const { username, password, age, role } = req.body;
        // console.log(username, password, age, role)

        const userExist = await User.findOne({ username: username })

        // if (userExist) return res.status(409).json("User already exists")
        const hashedPassword = await bycrypt.hash(password, 10); // 10 is the salt round number
        const newUser = new User({
            username: username,
            password: hashedPassword,
            age: age,
            role: role
        })

        await newUser.save();

        const token = await genrateToken(newUser._id);
        const url = await `localhost:3000/auth/verify/${token}`


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.HOST,
                pass: process.env.PASSWORD
            }
        });

        // send mail with defined transport object
        let mailDetails = {
            from: "jaypatelr28@gmail.com",
            to: username,
            subject: "Activate your Account",
            text: `Click on the following url to activate your email \n ${url} `,
        };

        // sending the email
        transporter.sendMail(mailDetails, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });


        res.status(201).send(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


exports.Login = async (req, res) => {

    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(401).json("Invalid Credentials");

    const passwordCompare = await bycrypt.compare(password, user.password, { new: true })

    if (!passwordCompare) return res.status(401).json('Invalid credentials');



    res.status(200).json({
        message: `Welcome ${username}!`,
        token: genrateToken(user._id)
    })

}

exports.verifyAccount = async (req, res) => {

    const token = req.params.token;

    console.log(token);

    const DecodedToken = verifyToken(token);

    const isverify = await User.findByIdAndUpdate(DecodedToken._id, { isVerified: true }, { new: true })

    res.status(200).json({
        message: isverify
    });
}










