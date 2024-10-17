const categorias = ['autos', 'superautos', 'mechaautos'];

const menu = `
  <nav>
    <ul>
      ${categorias.map(categoria => `<li><a href="#">${categoria}</a></li>`).join('')}
    </ul>
  </nav>
`;

document.body.insertAdjacentHTML('afterbegin', menu);

