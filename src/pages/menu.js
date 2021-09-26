import '../style.css';

import Pumpkin from '../assets/pumpkin.png';
const pumpkinItem = new Image();
pumpkinItem.src = Pumpkin;

import Gingerbread from '../assets/gingerbreadapple.png';
const gingerbreadItem = new Image();
gingerbreadItem.src = Gingerbread;


export function buildMenuContent() {
    const menuContent = document.createElement('p');
    menuContent.textContent = `Our Menu`;
    content.appendChild(menuContent);
    displayMenuItems();
}
let menuItems = [];
//copy displayLibrary
function displayMenuItems() {
    //display list of menu items
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';

    menuItems.forEach(item => {
        let itemCard = item.createMenuCard(item);
        menuContainer.append(itemCard);
    })

    content.appendChild(menuContainer);

}



class menuItem {

    constructor(name, price, description, imgUrl) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    createMenuCard() {
        let card = document.createElement('div');
        card.setAttribute('class', 'menuCard');
        // card.setAttribute('style', 'white-space: pre;');
        let title = document.createElement('h2');
        title.textContent = `${this.name}`;
        let image = document.createElement('img');
        image.src = `${this.imgUrl}`;
        let price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `${this.price}`;
        let description = document.createElement('p');
        description.classList.add('description');
        description.textContent = `${this.description}`;
        
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);
        return card;
    }

}

function addItemToMenu(name, price, description, imgUrl) {
    const newItem = new menuItem(name, price, description, imgUrl);
    menuItems.push(newItem);
}

addItemToMenu('Classic Pumpkin', '$3', 'Made from fresh puree and topped with whipped cream and cinnamon', `${pumpkinItem.src}`);
addItemToMenu('Gingerbread Apple', '$4', 'Dutch apple pie with homemade speculoos dumplings', `${gingerbreadItem.src}`);