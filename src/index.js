import _ from 'lodash';
import './style.css';

const content = document.querySelector('#content');


function buildHeader() {
    const header = document.createElement('header');
    header.textContent = "Piebird Bakery & Cafe";
    return header;
}

content.appendChild(buildHeader());
content.appendChild(buildNavBar());
content.appendChild(addSomeContent());
content.appendChild(buildFooter());

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

function addSomeContent() {
    const p = document.createElement('p');
    p.textContent = "Founded in 2001, the Piebird Bakery & Cafe specializes in handmade pies.";
    return p;
}

addSomeContent();

function buildFooter() {
    const footer = document.createElement('footer');
    footer.textContent = "Created with love by RF. Photos copyright Rachel Fearon 2020.";
    return footer;
}