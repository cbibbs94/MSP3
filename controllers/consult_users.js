const router = require('express').Router()
const db = require("../models/SequlizeORM")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async(req, res) => {
    let {password, ...rest} = req.body;
    console.log(...rest)
    const user = await User.create({
        ...rest,
        password_storage: await bcrypt.hash(password, 10)
    })
    res.json(user)
}) 

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router