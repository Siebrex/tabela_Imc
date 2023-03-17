//capturar evento de submit para capturar os valores
const form = document.querySelector('#form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura')
    
    const peso = Number(inputPeso.value);//pegar os valores escritos em cada espaço
    const altura = Number(inputAltura.value);

//if nao peso,peso for NAN falso
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
     if(!altura){
        setResultado('Altura inválida', false);
        return;
     }

     const imc= getImc(peso,altura);//precisa cirar a funcao imc para fazer seu calculo
     const nivelImc = getNivelImc(imc); //pegamos o nivel do imc
     const msg = `Seu Imc é  ${imc} ${nivelImc}.`;//criar resultado com a mensagem
     setResultado(msg, true); //setou como true, para no isvalid colocar como verdadeira
});

function getNivelImc(imc){
    const nivel = [ 'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3']; //criou um array para obter os valores

    if(imc>=39.9) return nivel[5]; //nao precisa dos else if porque ja ira retornar. valores
    if(imc>=34.9) return nivel[4];
    if(imc>=29.9) return nivel[3];
    if(imc>=24.9) return nivel[2];
    if(imc>=18.5) return nivel[1];
    if(imc<18.5) return nivel[0];
}




function getImc(peso,altura){  //funcao para criar o calculo do imc e ser chamada em cima 
    const imc = peso / altura **2;
    return imc.toFixed(2);//com duas casas decimais
}

function criaP(){   //funcao para criar paragrafo que mostrara o resultado
    const p = document.createElement('p'); 
     return p 

}

function setResultado(msg, isValid){  //para aparecer resultado na tela quando enviar
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP(); //inserir o paragrafo na variavel resultado

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('wrong');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}





