'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      email: 'test@test.com',
      password: '123123'
    },
    {
      email: 'test2@test.com',
      password: '123123'
    },
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', {[Op.or]: [{email: 'test@test.com'}, {email: 'test2@test.com'}]});
  }
};
