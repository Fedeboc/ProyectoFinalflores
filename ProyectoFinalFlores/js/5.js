let contenedor = document.getElementById("contenedor");
 contenedor.innerHTML = "<h1>Inventario</h1>"

 fetch("./Json/Data.json")
 .then((response) => response.json())
 .then((data) => {
   data.forEach((item) => {
     let li = document.createElement("lu");
     li.innerHTML = `
     <h2>${item.id}</h2>
     <p>Fondos: ${item.nombre}</p>
     <b>$${item.usd}</b>
   `;
   contenedor.append(li);
  });
}); 