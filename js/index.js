import data from '../data/data.json' assert { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

quizData.forEach((element) => {
    const card = createCard(element);
    cardContainer.append(card);
});
