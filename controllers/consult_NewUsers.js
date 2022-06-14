const router = require('express').Router()
const db = require("../models/SequelizeORM")
const bcrypt = require('bcrypt')

const { consult_auth } = db

router.post('/', async(req, res) => {
   try{
    let {password, ...rest} = req.body;
    console.log(req.body)
    const user = await consult_auth.create({
        ...rest,
        password_storage: await bcrypt.hash(password, 10)
    })
    res.json(user)
   } catch(err) {
     console.log(err)
   }   
})

router.get('/', async (req, res) => {
    const users = await consult_auth.findAll()
    res.json(users)
})

module.exports = router