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

function mostrarProducto() {
    const producto1 = new Producto(
        "la super remera", 
        "no es tan super", 
        15000, 
        1, 
        "https://http2.mlstatic.com/D_NQ_NP_612941-MLA72080568383_102023-O.webp"
    );

    const productoHTML = producto1.generarHTML();

    document.querySelector('main').innerHTML = productoHTML;
}

mostrarProducto();

document.querySelectorAll('button').forEach(button => {
    button.textContent = "Ver más";
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'producto.html';
    });
});
