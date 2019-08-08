const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password, username} = req.body

        const emailExists = await db.find_email([email])
        if (emailExists.length > 0) {
            return res.status(200).send({message: 'Email in use.'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user_info([username, email])
        await db.insert_hash([newUser[0].user_id, hash]).then(() => {
            req.session.user = newUser
            res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        })
        .catch(err => {
            res.status(200).send({message: 'Failed to register'})
        })

    }
}