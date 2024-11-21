const tarjet = { email: "laucharip@gmail.com", password: "vilgax" };

function handleSubmitLogin(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (tarjet.email === email && tarjet.password === password) {
    localStorage.setItem("email", email);

    localStorage.setItem("cart", JSON.stringify([]));

    localStorage.setItem("quantity", "0"); 

    window.location.href = "./index.html";
  } else {
    alert("Usuario o contraseña incorrecto, revisar");
    event.target.elements.email.value = "";
    event.target.elements.password.value = "";
  }
}

document.querySelector("form").addEventListener("submit", handleSubmitLogin);
