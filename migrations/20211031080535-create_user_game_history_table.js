'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_history', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        references: {
          model:'users', key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      date_play: {
        type: Sequelize.DATE,
        allowNull: false
      },
      score:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_history');
  }
};
