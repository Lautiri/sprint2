let data = [
  {
    "id": 1,
    "title": "Ford Mustang GT",
    "detail": "Deportivo clásico con motor V8 de alto rendimiento y diseño icónico.",
    "price": 55000,
    "stock": 4,
    "img": "https://www.pngitem.com/pimgs/m/340-3402493_ford-mustang-gt-5-0-2019-hd-png-download.png",
    "category": "Deportivo"
  },
  {
    "id": 2,
    "title": "Tesla Model S",
    "detail": "Sedán eléctrico con autonomía líder en su clase y tecnología avanzada.",
    "price": 79999,
    "stock": 1,
    "img": "https://teslize.com/wp-content/uploads/2023/10/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png",
    "category": "Eléctrico"
  },
  {
    "id": 3,
    "title": "Chevrolet Camaro ZL1",
    "detail": "Muscle car potente con motor V8 sobrealimentado y estilo agresivo.",
    "price": 63000,
    "stock": 1,
    "img": "https://i.pinimg.com/originals/36/7d/e6/367de641ffa6cd6c8ce806b0365ceea2.png",
    "category": "Facha"
  },
  {
    "id": 4,
    "title": "BMW M3",
    "detail": "Berlina deportiva con motor turboalimentado y un rendimiento excepcional.",
    "price": 72000,
    "stock": 1,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTlX4TYPRBEYoy3jsnH1ZBFmw91zRNQGQaw&s",
    "category": "Deportivo"
  },
  {
    "id": 5,
    "title": "Porsche 911 Carrera",
    "detail": "Ícono de los deportivos con un manejo preciso y diseño atemporal.",
    "price": 100000,
    "stock": 1,
    "img": "https://autofichas.com.ar/wp-content/uploads/2024/01/porsche-911-carrera-4s-3.0l-aut-2024.jpg",
    "category": "Deportivo"
  },
  {
    "id": 6,
    "title": "Audi R8",
    "detail": "Superdeportivo con motor V10 y tracción integral Quattro.",
    "price": 145000,
    "stock": 1,
    "img": "https://acnews.blob.core.windows.net/imgnews/large/0_4153240824.jpg",
    "category": "Superdeportivo"
  },
  {
    "id": 7,
    "title": "Lamborghini Huracán",
    "detail": "Máquina de velocidad extrema con un diseño impresionante.",
    "price": 230000,
    "stock": 1,
    "img": "https://img.freepik.com/fotos-premium/lamborghini-huracan-primer-plano-aislado-fondo-blanco-lujo-premium-velocidad-realista-3d_741269-65.jpg",
    "category": "Superdeportivo"
  },
  {
    "id": 8,
    "title": "Ferrari 488 Pista",
    "detail": "Deportivo italiano con motor V8 biturbo y aerodinámica avanzada.",
    "price": 330000,
    "stock": 1,
    "img": "https://content.api.news/v3/images/bin/7c3da6bbe5409bc0281fc5a8173fd634",
    "category": "Superdeportivo"
  },
  {
    "id": 9,
    "title": "McLaren 720S",
    "detail": "Superdeportivo británico con rendimiento de pista y lujo.",
    "price": 299999,
    "stock": 1,
    "img": "https://wallpapers.com/images/hd/best-mclaren-720s-background-m968efujbkxgkq3m.jpg",
    "category": "Superdeportivo"
  }
];

let filterData = [];

function mostrarProductos(productos) {
  let array = productos.map(item => `
    <div class="col-md-4 mb-3"> <!-- Cada tarjeta ocupará 4 columnas en pantallas medianas en adelante -->
      <div class="card" style="width: 100%;">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.detail}</p>
          <p class="card-text">Precio: $${item.price}</p>
          <p class="card-text">Stock: ${item.stock} unidades</p>
          <a href="producto.html?prod=${item.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelector('.container').innerHTML = `<div class="row">${array}</div>`;
}


function obtenerCategorias(productos) {
  let categorias = productos.map(item => item.category);
  return ['Ver todos', ...new Set(categorias)];
}

function mostrarBotonesCategorias() {
  let categorias = obtenerCategorias(data);
  
  let botones = categorias.map(cat => `
    <button class="btn btn-secondary m-2" onclick="filtrarPorCategoria('${cat}')">${cat}</button>
  `).join("");

  document.querySelector('#categoriaButtons').innerHTML = botones;
}

function filtrarPorCategoria(categoria) {
  if (categoria === 'Ver todos') {
    mostrarProductos(data);
  } else {
    let productosFiltrados = data.filter(item => item.category === categoria);
    mostrarProductos(productosFiltrados);
  }
}

function buscar() {
  let query = document.getElementById('searchInput').value.toLowerCase();

  filterData = data.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.detail.toLowerCase().includes(query)
  );

  mostrarProductos(filterData);
}

function resetear() {
  document.getElementById('searchInput').value = '';
  filterData = []; 
  mostrarProductos(data); 
}

const promise = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("Funcionara")
  }, 3000)
}) 
promise.then(() => mostrarProductos(data))
mostrarBotonesCategorias();
