let formSubmitButton = document.getElementById("formSubmitButton")
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

formSubmitButton.onclick = function(){
    nameInput.style.maxHeight="0";
    title.innerHTML = "Enviar";
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    if (nameInput.value.trim() !== "") {
      nameInput.style.maxHeight = "0";
      title.textContent = "Enviar";
    } else {
      console.log("Datos incorrectos");
    }
  });
  