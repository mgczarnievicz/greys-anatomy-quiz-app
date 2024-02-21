import data from '../data/data.json' assert { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
console.log('cardContainer: ', cardContainer);

let quizData = localStorage.getItem('quizApp-GreyAnatomy');

if (!quizData) {
    localStorage.setItem('quizApp-GreyAnatomy', JSON.stringify(data));
    quizData = data;
} else {
    quizData = JSON.parse(quizData);
}
const cardsBooked = quizData.filter((element) => element.bookmark);

cardsBooked.forEach((element, index) => {
    const card = createCard(element, index);
    console.log('card: ', card);
    cardContainer.append(card);
});
