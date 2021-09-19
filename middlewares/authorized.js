const { User, Movie } = require('../models')
const { verify } = require('../helpers/jwt');


const authorized = async(req, res, next) => {
    const token = req.headers.access_token
    const payload = await verify(token)
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
            const movieId = req.params.id
            const foundMovie = await Movie.findByPk(movieId)
            if (!foundMovie) {
                throw ({
                    name: "NOTFOUND",
                    status: 404,
                    msg: `Movie with id: ${movieId} not found`
                })
            }
            if (foundMovie.authorId !== userId) {
                throw ({
                    name: "FORBIDDEN",
                    status: 403,
                    msg: "Not Authorized to do that"
                })
            }
            next()
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorized