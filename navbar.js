const categorias = [
  { nombre: 'autos' },
  { nombre: 'superautos' },
  { nombre: 'mechaautos' }
];

const initialQuantity = localStorage.getItem("quantity") || 0;

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
              ? `<span class="nav-link">${localStorage.getItem("email")}</span><span class="nav-link" onclick="logout()">Cerrar sesion</span>`
              : `<a class="nav-link" href='./login.html'>Iniciar sesión</a>`}
          </li>
          <li class="nav-item">
            <a href="cart.html" class="nav-link" onclick="handleCartClick(event)">
              <img src="cart.png" alt="Carrito" style="width: 24px; height: 24px;">
              <span id="quantity">${localStorage.getItem("quantity") || 0}</span>
            </a>
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


function handleCartClick(event) {
  if (!localStorage.getItem("email")) {
    event.preventDefault();
    location.href = "./index.html"; 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartQuantity();
});

function updateCartQuantity() {
  const cartQuantity = localStorage.getItem("quantity") || 0;
  document.getElementById("quantity").textContent = cartQuantity;
}

window.addEventListener("storage", () => {
  updateCartQuantity();
});

