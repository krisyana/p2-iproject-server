'use strict';
const { Model } = require('sequelize');
const { encode } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Event);
        }
    }
    User.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Email is required',
                },
                notEmpty: {
                    msg: 'Email is required',
                },
                isEmail: {
                    msg: 'Must be an email',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Password is required',
                },
                notEmpty: {
                    msg: 'Password is required',
                },
                len: {
                    args: [5, 255],
                    msg: 'Password min 5 character',
                },
            },
        },
        username: DataTypes.STRING,
    }, {
        hooks: {
            beforeCreate: (user, options) => {
                user.password = encode(user.password);
            },
        },
        sequelize,
        modelName: 'User',
    });
    return User;
};