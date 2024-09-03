import data from '../data/data.json' with { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

const cardsBooked = data.filter((element) => element.bookmark);

cardsBooked.forEach((element) => {
    const card = createCard(element);
    cardContainer.append(card);
});
