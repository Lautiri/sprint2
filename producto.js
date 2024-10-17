const data = [
  {
    "id": 1,
    "title": "Ford Mustang GT",
    "detail": "Deportivo clásico con motor V8 de alto rendimiento y diseño icónico.",
    "price": 55000,
    "stock": 1,
    "img": "https://cdn.motor1.com/images/mgl/x60VP/s1/lanzamiento-ford-mustang-2020.jpg"
  },
  {
    "id": 2,
    "title": "Tesla Model S",
    "detail": "Sedán eléctrico con autonomía líder en su clase y tecnología avanzada.",
    "price": 79999,
    "stock": 1,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlVxWW8NjhW5c5sefL5ua-_LIEz3Lih1B7A&s"
  },
  {
    "id": 3,
    "title": "Chevrolet Camaro ZL1",
    "detail": "Muscle car potente con motor V8 sobrealimentado y estilo agresivo.",
    "price": 63000,
    "stock": 1,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlVxWW8NjhW5c5sefL5ua-_LIEz3Lih1B7A&s"
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
    "img": "https://cdn.motor1.com/images/mgl/Oo0PRY/s3/0840_nevada_coupe_u-crane_akos0607_edit_v03-cielo.jpg"
  },
  {
    "id": 6,
    "title": "Audi R8",
    "detail": "Superdeportivo con motor V10 y tracción integral Quattro.",
    "price": 145000,
    "stock": 1,
    "img": "https://www.vepersa.audi.es/content/dam/iph/international/es/general_assets/blueprint/master/models/r8/r8-spyder-v10-performance-rwd/stage/header-audi-r8-spyder-performance-v10-rwd-1400x438.jpg/_jcr_content/renditions/cq5dam.thumbnail.640.360.iph.hero.png?imwidth=320&imdensity=1"
  },
  {
    "id": 7,
    "title": "Lamborghini Huracán",
    "detail": "Máquina de velocidad extrema con un diseño impresionante.",
    "price": 230000,
    "stock": 1,
    "img": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/tecnica/2023/11_06_refresh/s/ext_02.jpg"
  },
  {
    "id": 8,
    "title": "Ferrari 488 Pista",
    "detail": "Deportivo italiano con motor V8 biturbo y aerodinámica avanzada.",
    "price": 330000,
    "stock": 1,
    "img": "https://www.drivercarsbcn.com/wp-content/uploads/2022/03/IMG_1197-min-scaled.jpg"
  },
  {
    "id": 9,
    "title": "McLaren 720S",
    "detail": "Superdeportivo británico con rendimiento de pista y lujo.",
    "price": 299999,
    "stock": 1,
    "img": "https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080"
  }
];

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
      </div>
    `;
  }
}

function mostrarProductos() {
  const productosHTML = data.map(producto => {
    const { title, detail, price, stock, img } = producto;
    const productoObj = new Producto(title, detail, price, stock, img);
    return productoObj.generarHTML();
  }).join('');

  document.querySelector('main').innerHTML = productosHTML;
}

mostrarProductos();
