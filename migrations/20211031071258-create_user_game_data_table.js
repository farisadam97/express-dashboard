'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_data', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        references: {
          model:'users', key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_data');
  }
};
