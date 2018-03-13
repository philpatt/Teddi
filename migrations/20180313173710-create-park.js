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