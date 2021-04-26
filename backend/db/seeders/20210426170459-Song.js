'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Songs', [{
        name: 'The Other Side of Paradise',
        artist: 'Glass Animals',
        image_url: 'http://images.genius.com/f94989a22d577632d4f7b2aa084301f9.996x1000x1.jpg',
        audio_url: 'https://www.youtube.com/watch?v=RMPX_vgqQnM&ab_channel=GlassAnimals-Topic',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Jaat Kahan Ho',
        artist: 'Kesarbai Kerkar',
        image_url: 'http://mywordsnthoughts.com/myworld/wp-content/uploads/2019/03/Kesarbai-Kerkar.jpg',
        audio_url: 'https://www.youtube.com/watch?v=Jz5cvGaNr2c&ab_channel=SiddiqueAhmad',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Pigs (Three Different Ones)',
        artist: 'Pink Floyd',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/7/74/Pink_Floyd-Animals-Frontal.jpg',
        audio_url: 'https://www.youtube.com/watch?v=gOqblSqx_VI&ab_channel=iiTzmiiqzChannel',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'NY State of Mind',
        artist: 'Nas',
        image_url: 'https://classicalbumsundays.com/wp-content/uploads/2019/03/df5cad3e1898fff244519348e1dee09f.1000x1000x1.jpg',
        audio_url: 'https://www.youtube.com/watch?v=hI8A14Qcv68&ab_channel=NasVEVO',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Stairway To Heaven',
        artist: 'Led Zeppelin',
        image_url: 'https://i0.wp.com/thetmca.com/files/2016/06/stairwaytoheaven.jpg?resize=225%2C225',
        audio_url: 'https://www.youtube.com/watch?v=QkF3oxziUI4&ab_channel=LedZeppelin',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'The Look of Love, Pt. 1',
        artist: 'Slum Village',
        image_url: 'https://images.rapgenius.com/648dd2b20fb394a5e14be3c1972d6815.300x319x1.jpg',
        audio_url: 'https://www.youtube.com/watch?v=wVap1ZWvQtA&ab_channel=SlumVillage-Topic',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Hurricane',
        artist: 'Bob Dylan',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Bob_Dylan_-_Desire.jpg',
        audio_url: 'https://www.youtube.com/watch?v=bpZvg_FjL3Q&ab_channel=BobDylanVEVO',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Seigfried',
        artist: 'Frank Ocean',
        image_url: 'https://media.pitchfork.com/photos/5929bcb55e6ef95969322eda/1:1/w_600/5f06f7f6.jpg',
        audio_url: 'https://www.youtube.com/watch?v=RWgpBlz16-s&ab_channel=Blonded',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Mystery of Iniquity- Live',
        artist: 'Ms. Lauryn Hill',
        image_url: 'https://i1.sndcdn.com/artworks-36u5XO6N0RUX-0-t500x500.jpg',
        audio_url: 'https://www.youtube.com/watch?v=vuD1gRtGqx4&ab_channel=LaurynHill-Topic',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Finally Moving',
        artist: 'Pretty Lights',
        image_url: 'https://i1.sndcdn.com/artworks-000001467896-1da2pa-t500x500.jpg',
        audio_url: 'https://www.youtube.com/watch?v=ASpA9Zd2Z0o&ab_channel=PrettyLights',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Get Lucky',
        artist: 'Daft Punk ft. Pharrell Williamss',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/7/71/Get_Lucky.jpg',
        audio_url: 'https://www.youtube.com/watch?v=5NV6Rdv1a3I&ab_channel=DaftPunkVEVO',
        createdAt: new Date(),
        updatedAt: new Date()},
        {name: 'Made To Stray',
        artist: 'Mt. Kimbie',
        image_url: 'https://assets.boomkat.com/spree/products/106398/large/original.jpg',
        audio_url: 'https://www.youtube.com/watch?v=7SfFInoSotg&ab_channel=MountKimbie',
        createdAt: new Date(),
        updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
