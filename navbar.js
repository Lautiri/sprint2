const categorias = ['remeras', 'pantalones', 'gorras'];

const menu = `
  <nav>
    <ul>
      ${categorias.map(categoria => `<li><a href="#">${categoria}</a></li>`).join('')}
    </ul>
  </nav>
`;

document.body.insertAdjacentHTML('afterbegin', menu);

