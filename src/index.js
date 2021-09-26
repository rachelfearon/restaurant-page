import _ from 'lodash';
import './style.css';
import { buildAboutContent } from './pages/about';
import { buildMenuContent } from './pages/menu';
import { buildContactContent } from './pages/contact';

const content = document.querySelector('#content');

function handleNavbarClick(target) {
    removeContent();
    setupConstantPageStructures();
    if (target == 'about') {
        buildAboutContent();
    } else if (target == 'menu') {
        buildMenuContent();
    } else if (target == 'contact') {
        buildContactContent();
    } else if (target == 'home') {
        buildHomeContent();
    } else {
        return;
    }
    
    applyNavListener();
}

function setupConstantPageStructures() {
    content.appendChild(buildHeader());
    content.appendChild(buildNavBar());
    content.appendChild(buildFooter());
}

function removeContent() {
    content.replaceChildren([]);
}

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

function createNavButton(buttonText) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    return button;
}

function buildFooter() {
    const footer = document.createElement('footer');
    footer.textContent = "Photos & illustrations copyright Rachel Fearon 2021.";
    return footer;
}

function applyNavListener() {
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar.addEventListener('click', event => {
        handleNavbarClick(event.target.innerText);
    })
}

function buildHomeContent() {
    const p = document.createElement('p');
    p.textContent = "Welcome to the Piebird Bakery & Cafe!";
    content.appendChild(p);
}


setupConstantPageStructures();
applyNavListener();
buildHomeContent();


