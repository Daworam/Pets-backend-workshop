const express = require('express');
const app = express();

const pets = [
  {name: "Jessica", species: "Cat", age: 2, owner: "Jake"},
  {name: "Rodney", species: "Rat", age: 3, owner: "Sid"},
  {name: "Jackie", species: "Dog", age: 16, owner: "Ariel"},
  {name: "Steve", species: "Praying Mantis", age: 1, owner: "Jake"}
];

app.get('/api/v1', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
});

app.get('/api/v1/pets/owner', (req, res) => {
  let foundPets = pets;
  const {owner} = req.query;

  console.log('req query', req.query);
  if(owner) {
    foundPets = pets.filter((pet)=> {
      return pet.owner === owner;
    })
  }
  res.send(foundPets);
});

app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;
  const foundPet = pets.find((animal) => {
    return animal.name === name
  })

  res.send(foundPet);
});


app.listen(8080, () => {
  console.log('listening on port 8080');
});