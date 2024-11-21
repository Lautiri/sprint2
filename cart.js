document.addEventListener("DOMContentLoaded", () => {
    renderCart();
  });
  
  function renderCart() {
    const cartContainer = document.querySelector(".card-body"); 
    const cart = JSON.parse(localStorage.getItem("cart")) || []; 
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
      return;
    }
  
    cartContainer.innerHTML = "";
  
    // Iterar sobre los productos en el carrito y agregar cada uno al HTML
    cart.forEach((item) => {
      const productHTML = `
        <div class="d-flex align-items-start border-bottom pb-3">
          <div class="me-4">
            <img src="${item.image}" alt="${item.name}" class="avatar-lg rounded" />
          </div>
          <div class="flex-grow-1 overflow-hidden">
            <h5 class="text-truncate font-size-18">${item.name}</h5>
            <div class="row">
              <div class="col-md-4">
                <div class="mt-3">
                  <p class="text-muted mb-2">Precio</p>
                  <h5 class="mb-0 mt-2">$${item.price}</h5>
                </div>
              </div>
              <div class="col-md-5">
                <div class="mt-3">
                  <p class="text-muted mb-2">Cantidad</p>
                  <h5 class="mb-0 mt-2">${item.quantity}</h5>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mt-3">
                  <p class="text-muted mb-2">Total</p>
                  <h5>$${(item.price * item.quantity).toFixed(2)}</h5>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-danger btn-sm ms-auto" onclick="removeFromCart('${item.id}')">Eliminar</button>
        </div>
      `;
      cartContainer.innerHTML += productHTML;
    });
  
    // Actualizar el total del carrito
    updateTotal(cart);
  }
  
  // Función para actualizar el total
  function updateTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.querySelector(".card-body .table tbody"); // Se asume que tienes un contenedor de tabla para el total
    totalElement.innerHTML = `
      <tr class="bg-light">
        <th>Total :</th>
        <td class="text-end">
          <span class="fw-bold">$${total.toFixed(2)}</span>
        </td>
      </tr>
    `;
  }
  
  // Función para eliminar producto del carrito
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Filtrar el producto con el id especificado
    cart = cart.filter((item) => item.id !== productId);
    
    // Actualizar el carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Actualizar la vista del carrito
    renderCart(); // Vuelve a renderizar el carrito actualizado
  }
  
  // Función para vaciar el carrito
  function clearCart() {
    // Limpiar el carrito en localStorage
    localStorage.setItem("cart", JSON.stringify([]));
  
    // Actualizar la vista del carrito
    renderCart(); // Vuelve a renderizar el carrito vacío
  }
  