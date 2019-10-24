'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        first_name: 'Johne',
        last_name: 'Due',
        email: 'chaim@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
     
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
