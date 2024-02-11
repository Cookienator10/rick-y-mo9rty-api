document.addEventListener("DOMContentLoaded", function() {
  fetchRM();
});

function createCard(character, img, location) {
  const card = document.createElement('div');

  const name = document.createElement('h2');
  name.textContent = character;

  const image = document.createElement('img');
  image.src = img;
  image.alt = 'Ricky and Morty Character';

  const locationElement = document.createElement('p');
  locationElement.textContent = location;

  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(locationElement);

  document.getElementById('cardContainer').appendChild(card);
}

function fetchRM() {
  const options = { method: 'GET' };

  fetch('https://rickandmortyapi.com/api/character', options)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(result => {
        const character = result.name;
        const img = result.image;
        const location = result.location.name;

        createCard(character, img, location);
      });
    })
    .catch(err => console.error('Error: ', err));
}
