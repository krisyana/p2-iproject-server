'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn('Events', 'UserId', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.removeColumn('Events', 'UserId', {});
    },
};