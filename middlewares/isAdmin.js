const { User } = require('../models')
const { verify } = require('../helpers/jwt');


const isAdmin = async(req, res, next) => {
    // const token = req.headers.access_token
    // const payload = await verify(token)
    const userId = req.user.id
    try {
        const foundUser = await User.findByPk(userId)
        if (!foundUser) {
            throw ({
                name: "NOTFOUND",
                status: 404,
                msg: `User with id: ${id} not found`
            })
        }
        if (foundUser.role !== "admin") {
            throw ({
                name: "FORBIDDEN",
                status: 403,
                msg: "Not Authorized to do that"
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = isAdmin