import data from '../data/data.json' assert { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

const cardsBooked = quizData.filter((element) => element.bookmark);

cardsBooked.forEach((element) => {
    const card = createCard(element);
    cardContainer.append(card);
});
