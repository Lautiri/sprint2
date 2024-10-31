const categorias = [
  { nombre: 'autos' },
  { nombre: 'superautos' },
  { nombre: 'mechaautos' }
];

const menu = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${categorias.map((categoria, index) => `
            <li class="nav-item">
              <a class="nav-link ${index === 0 ? "active" : ""}" href="categoria.html?cat=${categoria.nombre}">${categoria.nombre}</a>
            </li>
          `).join("")}
          <li class="nav-item">
            ${localStorage.getItem("email")
              ? `<span class="nav-link">${localStorage.getItem("email")}</span><span class="nav-link" onclick="logout()">Cerrar sesión</span>`: `<a class="nav-link" href='./login.html'>Iniciar sesión</a>`}
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

document.querySelector('header').innerHTML += menu;

function logout() {
  localStorage.clear();
  location.href = "./index.html";
}
