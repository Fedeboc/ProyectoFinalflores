array= [
    {
        "modelo": "BTC",
        "valor" : "19,839"
    },
    {
        "modelo": "ETH",
        "valor" : "1,556"
    }, 
    {
        "modelo": "SOL",
        "valor" : "1,295"

    }, 
    {
        "modelo": "BNB",
        "valor" : "35.81"
    },]

function agregarElementos(){ 
var lista=document.getElementById("ulListado"); 
array.forEach(function(data,index){
var linew= document.createElement("li");    
var contenido = document.createTextNode(data.modelo, data.valor);
lista.appendChild(linew);
linew.appendChild(contenido);

})
}
agregarElementos();