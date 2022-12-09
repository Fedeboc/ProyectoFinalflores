let lasCryptos =[];
let crypto1 = {
    nombre: "",
    valor: "",
    imagen: "",

};

crypto1 = {
    descripcion:"BTC",
    valor:"19,839",
    imagen: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
}

lasCryptos.push(crypto1);
 
crypto1 = {
    descripcion:"ETH",
    valor:"1,556",
    imagen:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png",
}

lasCryptos.push(crypto1);

crypto1 = {
    descripcion:"BNB",
    valor:"35.81",
    imagen:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png",
}

lasCryptos.push(crypto1);

crypto1 = {
    descripcion:"SOL",
    valor:"1,295",
    imagen:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Solana_logo.png/252px-Solana_logo.png",
}

lasCryptos.push(crypto1);

document.querySelector("#crypto1").innerHTML = armaTemplate();


function armaTemplate(){ 
    let template = '';
    for (let i = 0; i < lasCryptos.length; i++) {

        template += `<article> 
                    <h3 class="descripcion">${lasCryptos[i].descripcion}</h3>
                    <p class="descripcion">${lasCryptos[i].valor}</p>
                    <img src="${lasCryptos[i].imagen}" class="imagen">
                    </article>`
    }
    return template;
}
