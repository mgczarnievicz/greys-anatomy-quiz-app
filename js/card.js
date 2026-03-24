import { newPictureElement, textElement } from './share.js';

export default function createCard(cardInfo) {
	const card = document.createElement('section');
	card.classList.add('card');

	const bookmark = createBookmark(cardInfo.bookmark);

	const question = createQuestion(cardInfo.question);
	const answerButton = createAnswerButton();
	const answer = createAnswer(cardInfo.answer);
	const tags = createTags(cardInfo.tag);

	bookmark.addEventListener('click', (e) =>
		toggleBookmark(e, cardInfo.question),
	);
	answerButton.addEventListener('click', (e) => onClick(e, answer));

	card.append(bookmark, question, answerButton, answer, tags);

	return card;
}

function createBookmark(isBooked) {
	const imgSrc = isBooked
		? './assets/bookmark_filled.png'
		: './assets/bookmark.png';

	const imgAlt = isBooked ? 'Bookmark save' : 'Bookmark';

	const bookmark = newPictureElement(imgSrc, imgAlt, 'card__bookmark');

	return bookmark;
}

function createQuestion(questionText) {
	const question = textElement('h2', questionText, ['card__question']);

	return question;
}

function createAnswerButton() {
	const button = document.createElement('button');
	button.innerText = 'Show Answer';
	button.classList.add('card__button');

	return button;
}

function createAnswer(answerText) {
	const answer = textElement('p', answerText, [
		'card__answer',
		'card__answer--hidden',
	]);

	return answer;
}

function createTags(tagList) {
	const tagsList = document.createElement('ul');
	tagsList.classList.add('card__hashtags');

	if (tagList) {
		tagList.forEach((tag) => {
			const tagItem = textElement('li', `#${tag}`, []);
			tagsList.appendChild(tagItem);
		});
	}
	return tagsList;
}

function toggleBookmark(e, question) {
	let quizData = localStorage.getItem('quizApp-GreyAnatomy');
	quizData = JSON.parse(quizData);

	const newSrc = e.target.src.includes('bookmark_filled.png')
		? './assets/bookmark.png'
		: './assets/bookmark_filled.png';

	e.target.setAttribute('src', newSrc);

	if (quizData) {
		quizData.forEach((quiz) => {
			if (
				!quiz.question.localeCompare(question, 'en', {
					sensitivity: 'base',
				})
			) {
				quiz.bookmark = !quiz.bookmark;
			}
		});

		localStorage.setItem('quizApp-GreyAnatomy', JSON.stringify(quizData));
	}
}

function onClick(e, answer) {
	const newText =
		e.target.textContent === 'Show Answer' ? 'Hide Answer' : 'Show Answer';
	e.target.textContent = newText;
	answer.classList.toggle('card__answer--hidden');
}
