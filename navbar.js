const categorias = [
  { nombre: 'autos' },
  { nombre: 'superautos' },
  { nombre: 'mechaautos' }
];

const menu = `
  <nav class="navbar navbar-expand-lg">
    <ul class="navbar-nav">
      ${categorias.map(categoria => `<li class="nav-item"><a class="nav-link" href="categoria.html?cat=${categoria.nombre}">${categoria.nombre}</a></li>`).join('')}
    </ul>
  </nav>
`;

document.querySelector('header').innerHTML += menu;
