import data from '../data/data.json' with { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
console.log('cardContainer: ', cardContainer);

const cardsBooked = data.filter((element) => element.bookmark);

cardsBooked.forEach((element, index) => {
	const card = createCard(element, index);
	console.log('card: ', card);
	cardContainer.append(card);
});
