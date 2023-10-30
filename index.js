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

  function calculateIMC(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight !== '' && height !== ''){
      var bmi = weight / ((height/100)**2);
      var result = document.getElementById('result');
      result.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);

      //Clasificacion del IMC
      if(bmi<18.5){
        result.innerHTML += '- Bajo peso';
      }else if (bmi<25){
        result.innerHTML += '- Peso normal';
      }else if(bmi <30){
        result.innerHTML += '- Sobrepeso';
      }else{
        result.innerHTML += '- Obesidad';
      }
    }
  }
  