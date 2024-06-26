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

//# Ejercicios

//## DOM

/*- Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de
 partida imprime la información de todos los elementos que hay en formato
  "familia": Soy un h3 con el id... y la clase... mi padre es un header con....
   mi hermano es un h1 con....

```html
<header id="header" class="header">
  <h1 id="main-title" class="title title--big">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle subtitle--big">Soy un subtítulo</h2>
  <h3 id="start-point" class="start">
</header>
```*/

const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);

console.log (
    `Soy un ${startPointElement.tagName} con el id ${startPointElement.id} y la
    clase ${startPointElement.className} mi hermano mediano es un ${startPointElement.
    previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.
    className}, mi hermano mayor es un ${startPointElement.previousElementSibling.
    previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.id}
    y la clase ${startPointElement.previousElementSibling.className} y la clase 
    ${startPointElement.previousElementSibling.
        previousElementSibling.className}. Mi padre es un ${startPointElement.parentElement.
        tagName} con el id ${startPointElement.parentElement.id} y la clase 
        ${startPointElement.parentElement.className}`
);

/*- Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

```html
<ul id="first-list">
  <li>First List - Item 1</li>
</ul>
<ul id="second-list">
  <li>Second List - Item 1</li>
</ul>
```*/

/*
- Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
  - Hay 1 Header
  - Hay 1 h1
  - Hay 2 nav
    ......

```html
<header id="header">
  <h1>Título del encabezado</h1>
  <nav>
    <ul>
      <li class="list-item"><a href="#">Inicio</a></li>
      <li class="list-item"><a href="#">Acerca de</a></li>
      <li class="list-item"><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>

<section>
  <article>
    <h2>Artículo 1</h2>
    <p>Contenido del artículo 1.</p>
    <p>Otro párrafo en el artículo 1.</p>
    <a href="#">Enlace en el artículo 1</a>
    <img
      src="https://images.pexels.com/photos/144240/goat-lamb-little-grass-144240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Imagen 1"
    />
    <span>Texto de ejemplo en el artículo 1.</span>
  </article>

  <article>
    <h2>Artículo 12</h2>
    <p>Contenido del artículo 12.</p>
    <p>Otro párrafo en el artículo 12.</p>
    <a href="#">Enlace en el artículo 12</a>
    <img
      src="https://images.pexels.com/photos/65246/goat-in-austria-austria-goat-65246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Imagen 12"
    />
    <span>Texto de ejemplo en el artículo 12.</span>
  </article>
</section>

<section>
  <article>
    <h2>Artículo 25</h2>
    <p>Contenido del artículo 25.</p>
    <p>Otro párrafo en el artículo 25.</p>
    <a href="#">Enlace en el artículo 25</a>
    <img
      src="https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Imagen 25"
    />
    <span>Texto de ejemplo en el artículo 25.</span>
  </article>

  <article>
    <h2>Artículo 26</h2>
    <p>Contenido del artículo 26.</p>
    <p>Otro párrafo en el artículo 26.</p>
    <a href="#">Enlace en el artículo 26</a>
    <img
      src="https://images.pexels.com/photos/1390200/pexels-photo-1390200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Imagen 26"
    />
    <span>Texto de ejemplo en el artículo 26.</span>
  </article>
</section>

<footer>
  <nav>
    <ul>
      <li class="list-item"><a href="#">Inicio</a></li>
      <li class="list-item"><a href="#">Productos</a></li>
      <li class="list-item"><a href="#">Servicios</a></li>
      <li class="list-item"><a href="#">Contacto</a></li>
    </ul>
  </nav>
</footer>
```*/