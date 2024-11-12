const data = [
  {
    "id": 1,
    "title": "Ford Mustang GT",
    "detail": "Deportivo clásico con motor V8 de alto rendimiento y diseño icónico.",
    "price": 55000,
    "stock": 4,
    "img": "https://www.pngitem.com/pimgs/m/340-3402493_ford-mustang-gt-5-0-2019-hd-png-download.png"
  },
  {
    "id": 2,
    "title": "Tesla Model S",
    "detail": "Sedán eléctrico con autonomía líder en su clase y tecnología avanzada.",
    "price": 79999,
    "stock": 5,
    "img": "https://teslize.com/wp-content/uploads/2023/10/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png"
  },
  {
    "id": 3,
    "title": "Chevrolet Camaro ZL1",
    "detail": "Muscle car potente con motor V8 sobrealimentado y estilo agresivo.",
    "price": 63000,
    "stock": 1,
    "img": "https://i.pinimg.com/originals/36/7d/e6/367de641ffa6cd6c8ce806b0365ceea2.png"
  },
  {
    "id": 4,
    "title": "BMW M3",
    "detail": "Berlina deportiva con motor turboalimentado y un rendimiento excepcional.",
    "price": 72000,
    "stock": 1,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTlX4TYPRBEYoy3jsnH1ZBFmw91zRNQGQaw&s"
  },
  {
    "id": 5,
    "title": "Porsche 911 Carrera",
    "detail": "Ícono de los deportivos con un manejo preciso y diseño atemporal.",
    "price": 100000,
    "stock": 1,
    "img": "https://autofichas.com.ar/wp-content/uploads/2024/01/porsche-911-carrera-4s-3.0l-aut-2024.jpg"
  },
  {
    "id": 6,
    "title": "Audi R8",
    "detail": "Superdeportivo con motor V10 y tracción integral Quattro.",
    "price": 145000,
    "stock": 1,
    "img": "https://acnews.blob.core.windows.net/imgnews/large/0_4153240824.jpg"
  },
  {
    "id": 7,
    "title": "Lamborghini Huracán",
    "detail": "Máquina de velocidad extrema con un diseño impresionante.",
    "price": 230000,
    "stock": 1,
    "img": "https://img.freepik.com/fotos-premium/lamborghini-huracan-primer-plano-aislado-fondo-blanco-lujo-premium-velocidad-realista-3d_741269-65.jpg"
  },
  {
    "id": 8,
    "title": "Ferrari 488 Pista",
    "detail": "Deportivo italiano con motor V8 biturbo y aerodinámica avanzada.",
    "price": 330000,
    "stock": 1,
    "img": "https://content.api.news/v3/images/bin/7c3da6bbe5409bc0281fc5a8173fd634"
  },
  {
    "id": 9,
    "title": "McLaren 720S",
    "detail": "Superdeportivo británico con rendimiento de pista y lujo.",
    "price": 299999,
    "stock": 1,
    "img": "https://wallpapers.com/images/hd/best-mclaren-720s-background-m968efujbkxgkq3m.jpg"
  }
];


const autos = data.sort((a, b) => a.price - b.price).slice(0, 3);

const superautos = data.sort((a, b) => b.id - a.id).slice(0, 3);

const mechaautos = data.filter(auto => !autos.includes(auto) && !superautos.includes(auto));

console.log("Autos:", autos);
console.log("Superautos:", superautos);
console.log("Mechaautos:", mechaautos);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function increaseItem() {
  if (!productoSeleccionado) {
    console.error("Producto no encontrado");
    return;
  }
  const counterInput = document.getElementById("counter");
  let currentCount = parseInt(counterInput.value);
  if (currentCount < productoSeleccionado.stock) {
    counterInput.value = currentCount + 1;
  }
}
function decreaseItem() {
  if (!productoSeleccionado) {
    console.error("Producto no encontrado");
    return;
  }
  const counterInput = document.getElementById("counter");
  let currentCount = parseInt(counterInput.value);
  if (currentCount > 1) {
    counterInput.value = currentCount - 1;
  }
}
function addCart() {
  const counter = document.getElementById("counter");
  const quantity = parseInt(counter.value);

  const existingProduct = cart.find(item => item.id === productoSeleccionado.id);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...productoSeleccionado,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateTotalQuantity();

  alert("Producto agregado al carrito: " + quantity);
}

function updateTotalQuantity() {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  localStorage.setItem("quantity", totalQuantity);
  const quantityTag = document.getElementById("quantity");
  if (quantityTag) {
    quantityTag.textContent = totalQuantity;
  }
}



class Producto {
  constructor(titulo, detalle, precio, stock, imagen) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }

  generarHTML() {
    return `
      <div class="producto">
        <h2>${this.titulo}</h2>
        <img src="${this.imagen}" alt="${this.titulo}">
        <p>${this.detalle}</p>
        <p>Precio: $${this.precio}</p>
        <p>Stock disponible: ${this.stock}</p>
        ${
          localStorage.getItem("email")
            ? `<span><div class="container mt-5">
                <div class="row justify-content-center">
                  <div class="col-md-4">
                    <div class="input-group d-flex align-items-center justify-content-center">
                      <button class="btn btn-custom" type="button" id="btn-minus" onclick="decreaseItem()">-</button>
                      <input type="text" id="counter" class="counter-input mx-3" value="1" readonly>
                      <button class="btn btn-custom" type="button" id="btn-plus" onclick="increaseItem()">+</button>
                    </div><a href="#" class="btn-primary" onclick="addCart()">Comprar</a>
                  </div>
                </div>
              </div>
              </span>` 
            : `<button class='btn btn-success'><a href='login.html' style='color: inherit; text-decoration: none; cursor: default;'>Iniciar sesión para comprar</a></button>`
        }
      </div>
    `;
  }
}

function mostrarProducto() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('prod');
  productoSeleccionado = data.find(producto => producto.id == productId);

  if (productoSeleccionado) {
    const productoObj = new Producto(
      productoSeleccionado.title,
      productoSeleccionado.detail,
      productoSeleccionado.price,
      productoSeleccionado.stock,
      productoSeleccionado.img
    );
    
    document.querySelector('main').innerHTML = productoObj.generarHTML();
  } else {
    document.querySelector('main').innerHTML = "<p>Producto no encontrado.</p>";
  }
}

mostrarProducto();
