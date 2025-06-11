const url = "https://script.google.com/macros/s/AKfycbw8GRVW25HB80XaIvan4LtZLrAcfSET30rRdhoZOq4wK7yJIx74pX4QfG110FD1IM7d1g/exec"; // Reemplaza con la URL de tu API en Apps Script

fetch(url, {
  method: "POST",
  redirect:"follow",
  headers: { "Content-Type": "text/plain;charset=utf-8" },
  body: JSON.stringify(
    {"gfdfd":"ffgfd",
      "dfgfg":"dgdf",
      "dgfgdgdf":"dffdfd"
    }),
})
.then(response => response.text())
.then(data => console.log("Respuesta de la API:", data))
.catch(error => console.error("Error al consumir la API:", error));