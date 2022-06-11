const router = require('express').Router()
const db = require('../models/SequlizeORM')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: {email: req.body.email}
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_storage)) {
        res.status(404).json({ message: 'Username and/or Password could not be found'})
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.userid})
        res.json({user:user, token: result.value})
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
            res.json(user)
        }

    } catch {
        res.json(null)
    }
})

module.exports = router