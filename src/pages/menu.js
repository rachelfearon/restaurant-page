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
        price.textContent = `${this.price}`;
        let description = document.createElement('p');
        description.textContent = `${this.description}`;
        
        card.appendChild(title);
        card.appendChild(price);
        return card;
    }

}

function addItemToMenu(name, price, description, imgUrl) {
    const newItem = new menuItem(name, price, description, imgUrl);
    menuItems.push(newItem);
}

addItemToMenu('Donut', '$9.99', 'A delicious donut', './assets/pumpkin.png');