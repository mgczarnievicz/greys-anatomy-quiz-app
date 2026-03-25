import data from '../data/data.json' with { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

data.forEach((element, index) => {
	const card = createCard(element, index);
	cardContainer.append(card);
});
