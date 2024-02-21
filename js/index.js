import data from '../data/data.json' assert { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

let quizData = localStorage.getItem('quizApp-GreyAnatomy');

if (!quizData) {
    localStorage.setItem('quizApp-GreyAnatomy', JSON.stringify(data));
    quizData = data;
} else {
    quizData = JSON.parse(quizData);
}

quizData.forEach((element, index) => {
    const card = createCard(element, index);
    cardContainer.append(card);
});
