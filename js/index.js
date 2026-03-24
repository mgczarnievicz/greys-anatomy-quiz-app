import data from '../data/data.json' with { type: 'json' };
import createCard from './card.js';
import createHeader from './header.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const header = document.querySelector('[data-js="header"]');

header.append(createHeader());

let quizData = localStorage.getItem('quizApp-GreyAnatomy');

if (!quizData) {
	localStorage.setItem('quizApp-GreyAnatomy', JSON.stringify(data));
	quizData = data;
} else {
	quizData = JSON.parse(quizData);
}

quizData.forEach((element) => {
	const card = createCard(element);
	cardContainer.append(card);
});
