import profileData from '../data/profile.json' with { type: 'json' };
import quizData from '../data/data.json' with { type: 'json' };
import { newPictureElement, textElement, createSection } from './share.js';

const profileContainer = document.querySelector('[data-js="profile"]');
const root = document.documentElement;

const { name, image, about } = profileData;
const cardsBooked = quizData.filter((element) => element.bookmark);

createProfilePage(name, image, about, quizData.length, cardsBooked.length);

function createProfilePage(name, image, about, amountCards, amountBookmark) {
    const profilePic = newPictureElement(image, name, 'profile__picture');
    const nameElement = textElement('h1', name, ['profile__name']);

    // About Me
    const aboutMe = aboutMeSection(about);

    // Question Counters
    const questionCounterSection = createQuestionCounter(amountCards);

    // Bookmark Counters
    const bookmarkCounterSection = createBookmarkCounter(amountBookmark);

    const settingsSection = settingSection();

    profileContainer.append(
        profilePic,
        nameElement,
        aboutMe,
        questionCounterSection,
        bookmarkCounterSection,
        settingsSection
    );
}

function aboutMeSection(text) {
    const aboutMeSection = createSection(['profile__about-me']);
    const aboutMeTitle = textElement('h2', 'About Me:', []);
    const aboutMeText = textElement('p', text, []);

    aboutMeSection.append(aboutMeTitle, aboutMeText);
    return aboutMeSection;
}

function createBookmarkCounter(amount) {
    const bookmarkCounterSection = createSection([
        'profile__counter-bookmark',
        'profile__counter',
    ]);
    const bookmarkCounterImg = newPictureElement(
        './assets/bookmark_filled.png',
        'Bookmark counter image',
        'profile__counter-image'
    );
    const bookmarkCounterAmount = textElement('p', amount, [
        'profile__counter-counter',
    ]);
    bookmarkCounterSection.append(bookmarkCounterImg, bookmarkCounterAmount);
    return bookmarkCounterSection;
}

function createQuestionCounter(amount) {
    const questionCounterSection = createSection([
        'profile__counter-question',
        'profile__counter',
    ]);
    const questionCounterImg = newPictureElement(
        './assets/question.png',
        'question counter image',
        'profile__counter-image'
    );
    const questionCounterAmount = textElement('p', amount, [
        'profile__counter-counter',
    ]);
    questionCounterSection.append(questionCounterImg, questionCounterAmount);
    return questionCounterSection;
}

function settingSection() {
    const settingsSection = createSection(['profile__settings']);
    const settingTitle = textElement('h2', 'Settings:', [
        'profile__settings__title',
    ]);
    const settingsSettings = textElement('h4', 'Dark Mode', [
        'profile__settings__setting-name',
    ]);
    const switchElement = createSwitchElement();
    settingsSection.append(settingTitle, settingsSettings, switchElement);

    return settingsSection;
}

function createSwitchElement() {
    const switchElement = document.createElement('label');
    switchElement.classList.add('switch');

    switchElement.innerHTML = `<input type="checkbox" data-js="toggle-switch" /><span class="slider round"></span>`;

    return switchElement;
}
