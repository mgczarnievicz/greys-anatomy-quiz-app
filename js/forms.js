import createCard from './card.js';
import createHeader from './header.js';

const MAX_CHARACTERS = 150;

const form = document.querySelector('form');
const newCardContainer = document.querySelector('[js-data="new-cards"]');

const questionInput = document.querySelector('[data-js="new-question"]');
const answerInput = document.querySelector('[data-js="new-answer"]');

const characterLeftQuestion = document.querySelector(
	'[data-js="remaining-characters-question"]',
);
const characterLeftAnswer = document.querySelector(
	'[data-js="remaining-characters-answer"]',
);

const header = document.querySelector('[data-js="header"]');

header.append(createHeader());

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);
	const dataForm = Object.fromEntries(formData);

	let tag = dataForm.tag.split(',');
	tag = tag.map((element) => element.trim());

	const newCard = { ...dataForm, tag, bookmark: false };

	const card = createCard(newCard);
	newCardContainer.append(card);

	form.reset();
});

function characterLeft(e, characterLeftElement) {
	characterLeftElement.textContent =
		MAX_CHARACTERS - parseInt(e.target.value.length);
}

questionInput.addEventListener('input', (e) => {
	characterLeft(e, characterLeftQuestion);
});

answerInput.addEventListener('input', (e) => {
	characterLeft(e, characterLeftAnswer);
});
