// El styles lo importamos aquí, ya se carga después al compilar todo
/*import '../scss/styles.scss';

const titleElement = document.getElementById('title');

console.dir(titleElement);

console.dir(titleElement.parentElement);
console.dir(titleElement.nextElementSibling);*/

//const startPointElement = document.getElementById('start-point');

//console.dir(startPointElement);

//console.log(`Soy un ${startPointElement.tagName} con el id start-point`);

/*const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');

const firstContent = firstListElement.textContent;
const secondContent = secondListElement.textContent;

firstListElement.textContent = secondContent;
secondListElement.textContent = firstContent;*/

const headerElements = document.querySelectorAll('header').length;

console.log(headerElements);
