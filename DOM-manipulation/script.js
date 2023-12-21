// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('red-text');
content.textContent = "Hey I'm red!";

container.appendChild(content);

const h3Text = document.createElement('h3');
h3Text.classList.add('blue-text');
h3Text.textContent = "I'm a blue H3!";

container.appendChild(h3Text);

const blackPinkDiv = document.createElement('div');
blackPinkDiv.classList.add('black-pink-div');

const H1Text = document.createElement('H1');
H1Text.textContent = "I'm in a div";
blackPinkDiv.appendChild(H1Text);

const para2 = document.createElement('p');
para2.textContent = "Me too!";
blackPinkDiv.appendChild(para2);

container.appendChild(blackPinkDiv);



