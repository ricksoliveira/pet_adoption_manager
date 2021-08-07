const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/pets').get((request, response) => {
  response.send(PETS);
});

app.route('/api/pets').post((request, response) => {
  let pet = request.body;

  const firstId = PETS ? Math.max.apply(null, PETS.map(petIterator => petIterator.id)) + 1 : 1;
  pet.id = firstId;
  PETS.push(pet);
  

  response.status(201).send(pet);
});

app.route('/api/pets/:id').put((request, response) => {
  const petId = +request.params['id'];
  const pet = request.body;

  const index = PETS.findIndex(petIterator => petIterator.id === petId);
  PETS[index] = pet;

  response.status(200).send(pet);
});

app.route('/api/pets/:id').get((request, response) => {
  const petId = +request.params['id'];

  response.status(200).send(PETS.find(petIterator => petIterator.id === petId));
});

app.route('/api/pets/:id').delete((request, response)=> {
  const petId = +request.params['id'];
  PETS = PETS.filter(petIterator => petIterator.id !== petId);
  
  response.status(204).send({});
});

var PETS = [
    {
        id: 1,
        name: 'Yago',
        race: 'Maltese',
        imgUrl: '/assets/images/yago.JPG',
        birthday: '05/10/2005',
        mood: 3.5
    },
    {
        id: 2,
        name: 'Lupita',
        race: 'Dachshund',
        imgUrl: '/assets/images/lupita.jpg',
        birthday: '13/07/2020',
        mood: 4
    },
    {
        id: 3,
        name: 'Tob',
        race: 'Boxer',
        imgUrl: '/assets/images/tob.jpg',
        birthday: '06/01/2019',
        mood: 4
    },
    {
        id: 4,
        name: 'Faisca',
        race: 'Beagle',
        imgUrl: '/assets/images/faisca.jpg',
        birthday: '08/05/2017',
        mood: 3.5
    },
    {
        id: 5,
        name: 'Goku',
        race: 'Golden Retriever',
        imgUrl: '/assets/images/goku.jpg',
        birthday: '19/02/2015',
        mood: 5
    },
    {
        id: 6,
        name: 'Johnny',
        race: 'Shih Tzu',
        imgUrl: '/assets/images/johnny.jpg',
        birthday: '29/04/2016',
        mood: 3
    },
    {
        id: 7,
        name: 'Milu',
        race: 'Corgi',
        imgUrl: '/assets/images/jake.jpg',
        birthday: '15/03/2020',
        mood: 4
    },
    {
        id: 8,
        name: 'Spike',
        race: 'Coker Spaniel',
        imgUrl: '/assets/images/spike.jpg',
        birthday: '01/09/2018',
        mood: 4.5
    }
];