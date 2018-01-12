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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parks');
  }
};