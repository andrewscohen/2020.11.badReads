'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(250),
        unique:true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(250),
        unique:true
      },
      password: {
        allowNull: false,
        type: Sequelize.BYTEA,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
