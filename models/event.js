'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Event.belongsTo(models.User);
        }
    }
    Event.init({
        end: DataTypes.STRING,
        start: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Status is required',
                },
                notEmpty: {
                    msg: 'Status is required',
                },
            },
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Summary is required',
                },
                notEmpty: {
                    msg: 'Summary is required',
                },
            },
        },
    }, {
        sequelize,
        modelName: 'Event',
    });
    return Event;
};