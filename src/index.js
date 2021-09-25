import _ from 'lodash';
import './style.css';
import { buildAboutContent } from './pages/about';

const content = document.querySelector('#content');

function buildHeader() {
    const header = document.createElement('header');
    header.textContent = "Piebird Bakery & Cafe";
    return header;
}

function buildNavBar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    navbar.appendChild(createNavButton('home'));
    navbar.appendChild(createNavButton('menu'));
    navbar.appendChild(createNavButton('about'));
    navbar.appendChild(createNavButton('contact'));
    return navbar;
}

content.addEventListener('click', event => {
    if (event.target.textContent = 'home') {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        setupConstantPageStructures();
        content.appendChild(buildAboutContent());
    } else {
        return;
    }
})

function createNavButton(buttonText) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    return button;
}

function addHomeContent() {
    const p = document.createElement('p');
    p.textContent = "Founded in 2001, the Piebird Bakery & Cafe specializes in handmade pies.";
    return p;
}

function buildFooter() {
    const footer = document.createElement('footer');
    footer.textContent = "Photos copyright Rachel Fearon 2021.";
    return footer;
}

function setupConstantPageStructures() {
    content.appendChild(buildHeader());
    content.appendChild(buildNavBar());
    content.appendChild(buildFooter());
}

setupConstantPageStructures();
content.appendChild(addHomeContent());


