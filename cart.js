document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    const checkoutButton = document.querySelector("#btn-checkout");
    checkoutButton.addEventListener("click", finishOrder);
  });
  
  function renderCart() {
    const cartContainer = document.querySelector(".card-body"); 
    const cart = JSON.parse(localStorage.getItem("cart")) || []; 
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
      return;
    }
  
    cartContainer.innerHTML = "";
  
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
  
    updateTotal(cart);
  }
  
  function updateTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.querySelector(".card-body .table tbody");
    totalElement.innerHTML = `
      <tr class="bg-light">
        <th>Total :</th>
        <td class="text-end">
          <span class="fw-bold">$${total.toFixed(2)}</span>
        </td>
      </tr>
    `;
  }
  
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart = cart.filter((item) => item.id !== productId);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    renderCart();
  }
  
  function finishOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  
    if (quantity === 0) {
      Toastify({
        text: "No hay productos en el carrito",
        offset: {
          y: 70 
        },
      }).showToast();
    } else {
      Swal.fire({
        text: "Quieres añadir al carrito",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red"
      }).then(result => {
        if (result.isConfirmed) {
          const datos = {
            user: localStorage.getItem("email").split("@")[0],
            items: cart,
          };
  
          fetch("https://6736a17baafa2ef222310933.mockapi.io/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
          })
          .then(response => response.json())
          .then(data => {
            Toastify({
              text: `Buenisima compra ${data.user}, numero de orden es:${data.id}`,
              offset: {
                y: 250,
              },
            }).showToast();
  
            clearCart();
          })
          .catch(() => {
            Swal.fire({
              text: "Intenta nuevamente, error tecnico",
              confirmButtonColor: "#1d5dec",
              confirmButtonText: "Confirmar"
            });
          });
        }
      });
    }
  }
  