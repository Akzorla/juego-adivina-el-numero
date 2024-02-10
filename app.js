let randomNumber = Math.floor(Math.random()*100) + 1; // SE GENERA NUMERO AL AZAR
let userNumber = document.getElementById('userNumber');
let message = document.getElementById('message');

function checkNumber(){
    let enteredNumber = parseInt(userNumber.value);
    

    if(enteredNumber < 1 || enteredNumber > 100 || isNaN(enteredNumber)){
        document.getElementById('message').innerHTML = '¡NUMERO O CARACTER NO VALIDO!' + '<br/>' + 'Introduce un numero entre 1 y 100';
        return;
    }

    if(enteredNumber === randomNumber){
        message.textContent = '¡HAS GANADO!';
        message.style.color = 'green';
        userNumber.disabled = true;
        return;
    }

    if(enteredNumber < randomNumber){
        document.getElementById('message').innerHTML = '¡TE HAS EQUIVOCADO!' + '<br/>' + 'Debes ingresar un numero mayor';
        message.style.color = 'Red'
    }else {
        document.getElementById('message').innerHTML = '¡TE HAS EQUIVOCADO!' + '<br/>' + 'Debes ingresar un numero menor';
        message.style.color = 'Red'
    }
}
