const { User } = require('../models');
const { decode } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');

class UserController {
    static async findAll(req, res, next) {
        try {
            const result = await User.findAll();
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
    static async signup(req, res, next) {
        const { email, password } = req.body;
        try {
            const result = await User.create({ email, password, role: 'admin' });
            res.status(201).json({ id: result.id, email: result.email });
        } catch (err) {
            next(err);
        }
    }
    static async googleAuth(req, res, next) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const idToken = req.body.id_token;
        try {
            const ticket = await client.verifyIdToken({
                idToken: idToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { email, name: username } = payload;
            const googleUser = await User.findOrCreate({
                where: {
                    email,
                },
                defaults: {
                    email,
                    username,
                    password: email,
                    role: 'staff',
                },
            });
            // console.log(googleUser)
            const access_token = await sign({
                id: googleUser[0].id,
                email: googleUser[0].email,
                role: googleUser[0].role,
            });
            // console.log(access_token)
            res.status(200).json({ access_token });
        } catch (err) {
            next(err);
        }
    }
    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const userFind = await User.findOne({ where: { email } });
            if (userFind) {
                const validate = await decode(password, userFind.password);
                if (validate) {
                    const access_token = await sign({
                        id: userFind.id,
                        email: userFind.email,
                        role: userFind.role,
                    });
                    res.status(200).json({ access_token });
                } else {
                    throw {
                        name: 'LOGINERROR',
                        status: 401,
                        msg: 'Email/Password is not valid',
                    };
                }
            } else {
                throw {
                    name: 'LOGINERROR',
                    status: 401,
                    msg: 'Email/Password is not valid',
                };
            }
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        const { name } = req.body;
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                const result = await User.update({ name }, { where: { id }, returning: true });
                res.status(200).json(result[1][0]);
            } else {
                throw {
                    name: 'NOTFOUND',
                    status: 404,
                    msg: `User with id: ${id} not found`,
                };
            }
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (user) {
                const result = await User.destroy({ where: { id } });
                res.status(200).json({ message: `User with id: ${id} deleted` });
            } else {
                throw {
                    name: 'NOTFOUND',
                    status: 404,
                    msg: `User with id: ${id} not found`,
                };
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;