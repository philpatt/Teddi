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
        type: Sequelize.TEXT
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
        type: Sequelize.TEXT
      },
      directionsInfo: {
        type: Sequelize.TEXT
      },
      entranceFeesCost: {
        type: Sequelize.TEXT
      },
      entranceFeesDesc: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      weatherInfo: {
        type: Sequelize.TEXT
      },
      parkCode: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parks');
  }
};