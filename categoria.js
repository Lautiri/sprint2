const data = [
    { id: 1, title: "Ford Mustang GT", detail: "Deportivo clásico con motor V8 de alto rendimiento.", price: 55000, stock: 4, img: "https://www.pngitem.com/pimgs/m/340-3402493_ford-mustang-gt-5-0-2019-hd-png-download.png" },
    { id: 2, title: "Tesla Model S", detail: "Sedán eléctrico con autonomía líder.", price: 79999, stock: 1, img: "https://teslize.com/wp-content/uploads/2023/10/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png" },
    { id: 3, title: "Chevrolet Camaro ZL1", detail: "Muscle car potente.", price: 63000, stock: 1, img: "https://i.pinimg.com/originals/36/7d/e6/367de641ffa6cd6c8ce806b0365ceea2.png" },
    { id: 4, title: "BMW M3", detail: "Berlina deportiva.", price: 72000, stock: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTlX4TYPRBEYoy3jsnH1ZBFmw91zRNQGQaw&s" },
    { id: 5, title: "Porsche 911 Carrera", detail: "Ícono de los deportivos.", price: 100000, stock: 1, img: "https://autofichas.com.ar/wp-content/uploads/2024/01/porsche-911-carrera-4s-3.0l-aut-2024.jpg" },
    { id: 6, title: "Audi R8", detail: "Superdeportivo con motor V10.", price: 145000, stock: 1, img: "https://acnews.blob.core.windows.net/imgnews/large/0_4153240824.jpg" },
    { id: 7, title: "Lamborghini Huracán", detail: "Máquina de velocidad extrema.", price: 230000, stock: 1, img: "https://img.freepik.com/fotos-premium/lamborghini-huracan-primer-plano-aislado-fondo-blanco-lujo-premium-velocidad-realista-3d_741269-65.jpg" },
    { id: 8, title: "Ferrari 488 Pista", detail: "Deportivo italiano con motor V8.", price: 330000, stock: 1, img: "https://content.api.news/v3/images/bin/7c3da6bbe5409bc0281fc5a8173fd634" },
    { id: 9, title: "McLaren 720S", detail: "Superdeportivo británico.", price: 299999, stock: 1, img: "https://wallpapers.com/images/hd/best-mclaren-720s-background-m968efujbkxgkq3m.jpg" }
];

function obtenerCategoria(cat) {
    switch (cat) {
        case 'autos':
            return data.sort((a, b) => a.price - b.price).slice(0, 3);
        case 'superautos':
            return data.slice(-3);
        case 'mechaautos':
            return data.slice(3, 6);
        default:
            return [];
    }
}

function cargarProductos() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('cat');

    const productosCategoria = obtenerCategoria(categoria);

    if (productosCategoria.length > 0) {
        const productosContainer = document.getElementById('productos');
        productosCategoria.forEach(producto => {
            const productoHTML = `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${producto.img}" class="card-img-top" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.detail}</p>
                            <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
                            <p class="card-text"><strong>Stock:</strong> ${producto.stock} unidades</p>
                        </div>
                    </div>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
    } else {
        document.getElementById('productos').innerHTML = "<p>No se encontraron productos en esta categoría.</p>";
    }
}

cargarProductos();
