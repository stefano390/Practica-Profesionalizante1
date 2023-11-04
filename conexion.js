const form = document.getElementById("registro");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  
  const data = {
    nombre: nombre,
    email: email,
  };

  console.log(data);

  const fetchResult = await fetch("index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(fetchResult);
});