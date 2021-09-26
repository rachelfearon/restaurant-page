export function buildMenuContent() {
    const menuContent = document.createElement('p');
    menuContent.textContent = `Our Menu`;
    content.appendChild(menuContent);
    displayMenuItems();
}

function displayMenuItems() {
    //display list of menu items
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    const p = document.createElement('p');
    p.textContent = 'Menu Item 1';
    content.appendChild(menuContainer);
    content.appendChild(p);
}
