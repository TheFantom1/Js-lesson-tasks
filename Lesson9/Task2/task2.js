let itemList = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementById('menu');
for (let i = 0; i < itemList.length; i++) {
    let item = document.createElement('li');
    item.textContent = itemList[i];
    menu.appendChild(item);
}