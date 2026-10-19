let usuario = prompt("Escolha entre pedra, papel e tesoura:").toLowerCase();
let numeroComp = Math.random();
let computador;

if(numeroComp < 1/3){
    computador = "pedra";
}else if (numeroComp < 2/3){
    computador = "papel";
}else{
    computador = "tesoura"
}

alert("Você: " + usuario + "\nComputador: " + computador);

if(usuario === computador){
    alert("Resultado: Empate.")
}
else if((usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")){
            alert("Resultado: Vitória do jogador.");
        }else if ((usuario === "pedra") ||
                (usuario === "papel") ||
                (usuario === "tesoura")){
                    alert("Resultado: Vitória do computador.");
                }else{
                    alert("Você inseriu um valor inválido. Tente novamente.")
                }