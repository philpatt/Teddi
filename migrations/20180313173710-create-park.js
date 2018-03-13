'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parkname: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      directionsInfo: {
        type: Sequelize.STRING
      },
      entranceFeesCost: {
        type: Sequelize.STRING
      },
      entranceFeesDesc: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      weatherInfo: {
        type: Sequelize.STRING
      },
      parkCode: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('parks');
  }
};