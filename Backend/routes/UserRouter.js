const router = require('express').Router()
const user = require('../models/UserSchema')
const crypto = require('crypto-js')
const JWT = require('jsonwebtoken')


// signup router
router.post('/Signup', async (req, res) => {
    try {


        var checkEmail = await user.findOne({ email: req.body.Email })
        if (checkEmail) {
            return res.status(400).json({ message: "Already have an account in using same email please login" })
        } else {

            req.body.Password = crypto.AES.encrypt(req.body.password, process.env.Passkey).toString()
            const newUser = new user({
                password: req.body.Password,
                fullname: req.body.Name,
                email: req.body.Email,
                phone: req.body.Phone

            })
            await newUser.save()
            res.status(200).json({ message: 'signup successfull' })


        }


    } catch (error) {
        res.status(500).json(error)
        console.log("error from user signup", error);

    }
})

router.post('/Login', async (req, res) => {
    try {
        const FindUser = await user.findOne({ email: req.body.Email })
        if (!FindUser) {
            return res.status(404).json({ message: "email is incorret" })
        } else {
            const bytes = crypto.AES.decrypt(FindUser.password, process.env.Passkey)
            const OriginalPassword = bytes.toString(crypto.enc.Utf8)
            if (req.body.Password !== OriginalPassword) {
                return res.status(404).json({ message: "Password is incorrect" })
            } else {
                var Token = JWT.sign({ id: FindUser._id }, process.env.Tockenkey, { expiresIn: '10d' })
                res.status(200).json({ Token, id: FindUser._id })

            }
        }


    } catch (error) {
        res.status(500).json(error)
        console.log("error from user signup", error);

    }
})


module.exports = router