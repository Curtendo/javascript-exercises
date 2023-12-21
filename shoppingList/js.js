const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', e => {
    let currentInput = input.value;
    input.value = "";

    let listItem = document.createElement('li');
    let itemSpan = document.createElement('span');
    let itemButton = document.createElement('button');

    listItem.appendChild(itemSpan);
    listItem.appendChild(itemButton);

    itemSpan.textContent = currentInput;
    itemButton.textContent = "Delete";

    list.appendChild(listItem);

    input.focus();
});

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.remove();
        input.focus();
    }
});