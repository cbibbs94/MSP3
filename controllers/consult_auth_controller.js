const router = require('express').Router()
const db = require('../models/SequelizeORM')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { consult_auth } = db

router.post('/', async (req, res) => {
    console.log(req.body)
    
    let user = await consult_auth.findOne({
        where: {email: req.body.email}
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_storage)) {
        res.status(404).json({ errMessage: 'Email and/or Password could not be found'})
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.userid})
        res.status(200).json({user:user, token: result.value})
    }
})

router.get('/profile', async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            const { id } = result.value

            let user = await user.findOne({
                where: {
                    userid: id
                }
            })
            res.status(200).json(user)
        }

    } catch {
        res.json(null)
    }
})

module.exports = router