'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Developers', [{
      name: 'Randolph "Bioblaze Payne" Aarseth',
      title: 'Creator of Trovobot',
      github: 'https://github.com/Bioblaze',
      twitter: 'https://twitter.com/BioblazePayne',
      discord: 'Bioblaze Payne#6459',
      icon_url: 'https://pbs.twimg.com/profile_images/792932625572737024/pDtHAwwl_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Keenan "Krammy" Mcentee',
      title: 'Awesome commander of the plugin armada',
      github: 'https://github.com/kramitox',
      twitter: 'https://twitter.com/KrammyTV',
      discord: 'Krammy#0001',
      icon_url: 'https://pbs.twimg.com/profile_images/1200722774404321280/-ZPU6TF6_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
},{
      name: 'Andre "Rehkloos" Saddler',
      title: 'megamind script creator',
      github: 'https://github.com/rehkloos',
      twitter: 'https://twitter.com/rehkloos',
      discord: 'rehkloos#3618',
      icon_url: 'https://pbs.twimg.com/profile_images/1242873681715572736/j25r_jng_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
},{
      name: 'Alberto "Friext" Parras',
      title: 'The Spanish plugin factory.',
      github: 'https://github.com/albertoparras-dev',
      twitter: 'https://twitter.com/Friext',
      discord: 'Friext#6935',
      icon_url: 'https://pbs.twimg.com/profile_images/1289769401097629701/nI5KXHl4_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
}]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Developers', null, {});
  }
};
