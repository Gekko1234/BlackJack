
// ---------------------------------------------------------------- DEFINICIÓN DE VARIABLES GLOBALES ---------------------------------------------------------------- //

// la segunda carta de la banca va al revés

let imgCartaBancaReversa = document.createElement('img');
imgCartaBancaReversa.src="IMG/blackjack/reverso-gris.png";
imgCartaBancaReversa.classList.add("cartas");

//cantidad de jugadores y apuesta que harán
let cantidadJugadores = Number(prompt("¿Cuantos jugadores habrá en la mesa?"));
let cantidadApostada = Number(prompt('Cantidad a apostar'));

let baraja = [];
let tipoCarta = ["C", "D", "P", "T"];
let cartaEspecial = ["A", "K", "Q", "J"];
let puntosJugador = [0,0,0,0,0,0];
let puntosBanca = 0;
let apuestas = [0,0,0,0,0,0];
let dineroJ = [500,500,500,500,500,500];

// ---------------------------------------------------------------- Referencias a objetos de HTML ---------------------------------------------------------------- //

const apuestaJ = [
    document.querySelector('#apuestaJ1'),
    document.querySelector('#apuestaJ2'),
    document.querySelector('#apuestaJ3'),
    document.querySelector('#apuestaJ4'),
    document.querySelector('#apuestaJ5'),
    document.querySelector('#apuestaJ6')
];

const dinerosJ = [
    document.querySelector('#dineroJ1'),
    document.querySelector('#dineroJ2'),
    document.querySelector('#dineroJ3'),
    document.querySelector('#dineroJ4'),
    document.querySelector('#dineroJ5'),
    document.querySelector('#dineroJ6'),
];

const botonPedir = document.querySelector('#bt-pedir');
const botonPedir2 = document.querySelector('#bt-pedir2');
const botonPedir3 = document.querySelector('#bt-pedir3');
const botonPedir4 = document.querySelector('#bt-pedir4');
const botonPedir5 = document.querySelector('#bt-pedir5');
const botonPedir6 = document.querySelector('#bt-pedir6');

const botonPasar = document.querySelector('#bt-pasar');
const botonPasar2 = document.querySelector('#bt-pasar2');
const botonPasar3 = document.querySelector('#bt-pasar3');
const botonPasar4 = document.querySelector('#bt-pasar4');
const botonPasar5 = document.querySelector('#bt-pasar5');
const botonPasar6 = document.querySelector('#bt-pasar6');

const botonNuevo= document.querySelector('#bt-nuevo');
const marcador = document.querySelectorAll('small');
const divJugadorCarta = document.querySelector('#jugador-cartas');
const divJugadorCarta2 = document.querySelector('#jugador-cartas2');
const divJugadorCarta3 = document.querySelector('#jugador-cartas3');
const divJugadorCarta4 = document.querySelector('#jugador-cartas4');
const divJugadorCarta5 = document.querySelector('#jugador-cartas5');
const divJugadorCarta6 = document.querySelector('#jugador-cartas6');

// ---------------------------------------------------------------- DOM de la banca ---------------------------------------------------------------- //

let divBancaCarta = document.querySelector('#banca-cartas');
const marcadorB = document.querySelector('#puntosBanca');

// ---------------------------------------------------------------- Resultado ---------------------------------------------------------------- //

const resultados = [
    document.querySelector('#ganador'),
    document.querySelector('#ganador2'),
    document.querySelector('#ganador3'),
    document.querySelector('#ganador4'),
    document.querySelector('#ganador5'),
    document.querySelector('#ganador6')
];

// ---------------------------------------------------------------- Referencias a objetos de HTML ---------------------------------------------------------------- //

    for (let i = 0; i < cantidadJugadores; i++){
        dineroJ[i] =  dineroJ[i] - cantidadApostada;
        dinerosJ[i].innerHTML = 'Dinero ' + dineroJ[i];
        apuestaJ[i].innerHTML = 'Apuesta ' + cantidadApostada;
    }


// ---------------------------------------------------------------- Comprobación ---------------------------------------------------------------- //

    do{
        break;
    }while((cantidadJugadores < 2 || cantidadJugadores > 6) || (cantidadApostada <= 0 || cantidadApostada > 500) || (cantidadApostada <= 0 || cantidadApostada > 500 && cantidadJugadores < 2 || cantidadJugadores > 6));

    for (let i = 0; i < cantidadJugadores; i++){
        if(puntosJugador[i] == 21){
            botonPedir.disabled = true;
        }
    }

// ---------------------------------------------------------------- Funciones ---------------------------------------------------------------- //

// Mostrar cantidad de jugadores
    const mostrarJugadores = (cantidadJugadores) => {

        // Jugador 1 cartas
        const carta = pedirCarta();
        const carta2 = pedirCarta();

        // Jugador 2 cartas
        const carta3 = pedirCarta();
        const carta4 = pedirCarta();

        // poner en el html los puntos y calcular el valor
        puntosJugador[0] = valorCarta(carta) + valorCarta(carta2);
        marcador[1].innerText = puntosJugador[0];

        puntosJugador[1] = valorCarta(carta3) + valorCarta(carta4);
        marcador[2].innerText = puntosJugador[1];

        // crear carta para el html html
        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta + ".png";
        imgCarta.classList.add("cartas");
        const imgCarta2 = document.createElement('img');
        imgCarta2.src="IMG/blackjack/" + carta2 + ".png";
        imgCarta2.classList.add("cartas");

        const imgCarta3 = document.createElement('img');
        imgCarta3.src="IMG/blackjack/" + carta3 + ".png";
        imgCarta3.classList.add("cartas");
        const imgCarta4 = document.createElement('img');
        imgCarta4.src="IMG/blackjack/" + carta4 + ".png";
        imgCarta4.classList.add("cartas");

        // añadir carta al div
        divJugadorCarta.append(imgCarta);
        divJugadorCarta.append(imgCarta2);

        divJugadorCarta2.append(imgCarta3);
        divJugadorCarta2.append(imgCarta4);

        //muestro los jugadores en funcion de cuantos se hayan elegido al principio
        if(cantidadJugadores == 1){
            divJugador3.style.display="none";
            divJugador4.style.display="none";
            divJugador5.style.display="none";
            divJugador6.style.display="none";
        }else if(cantidadJugadores == 2){
            divJugador3.style.display="none";
            divJugador4.style.display="none";
            divJugador5.style.display="none";
            divJugador6.style.display="none";
        }else if(cantidadJugadores == 3){

            // Jugador 3
            const carta5 = pedirCarta();
            const carta6 = pedirCarta();

            puntosJugador[2] = valorCarta(carta5) + valorCarta(carta6);
            marcador[3].innerText = puntosJugador[2];

            const imgCarta5 = document.createElement('img');
            imgCarta5.src="IMG/blackjack/" + carta5 + ".png";
            imgCarta5.classList.add("cartas");
            const imgCarta6 = document.createElement('img');
            imgCarta6.src="IMG/blackjack/" + carta6 + ".png";
            imgCarta6.classList.add("cartas");
    
            divJugadorCarta3.append(imgCarta5);
            divJugadorCarta3.append(imgCarta6);

            divJugador4.style.display="none";
            divJugador5.style.display="none";
            divJugador6.style.display="none";

        }else if(cantidadJugadores == 4){

            // Jugador 3
            const carta5 = pedirCarta();
            const carta6 = pedirCarta();

            puntosJugador[2] = valorCarta(carta5) + valorCarta(carta6);
            marcador[3].innerText = puntosJugador[2];

            const imgCarta5 = document.createElement('img');
            imgCarta5.src="IMG/blackjack/" + carta5 + ".png";
            imgCarta5.classList.add("cartas");
            const imgCarta6 = document.createElement('img');
            imgCarta6.src="IMG/blackjack/" + carta6 + ".png";
            imgCarta6.classList.add("cartas");
    
            divJugadorCarta3.append(imgCarta5);
            divJugadorCarta3.append(imgCarta6);

            // Jugador 4
            const carta7 = pedirCarta();
            const carta8 = pedirCarta();

            puntosJugador[3] = valorCarta(carta7) + valorCarta(carta8);
            marcador[4].innerText = puntosJugador[3];

            const imgCarta7 = document.createElement('img');
            imgCarta7.src="IMG/blackjack/" + carta7 + ".png";
            imgCarta7.classList.add("cartas");
            const imgCarta8 = document.createElement('img');
            imgCarta8.src="IMG/blackjack/" + carta8 + ".png";
            imgCarta8.classList.add("cartas");

            divJugadorCarta4.append(imgCarta7);
            divJugadorCarta4.append(imgCarta8);

            divJugador5.style.display="none";
            divJugador6.style.display="none";

        }else if(cantidadJugadores == 5){

            // Jugador 3
            const carta5 = pedirCarta();
            const carta6 = pedirCarta();

            puntosJugador[2] = valorCarta(carta5) + valorCarta(carta6);
            marcador[3].innerText = puntosJugador[2];

            const imgCarta5 = document.createElement('img');
            imgCarta5.src="IMG/blackjack/" + carta5 + ".png";
            imgCarta5.classList.add("cartas");
            const imgCarta6 = document.createElement('img');
            imgCarta6.src="IMG/blackjack/" + carta6 + ".png";
            imgCarta6.classList.add("cartas");
    
            divJugadorCarta3.append(imgCarta5);
            divJugadorCarta3.append(imgCarta6);

            // Jugador 4
            const carta7 = pedirCarta();
            const carta8 = pedirCarta();

            puntosJugador[3] = valorCarta(carta7) + valorCarta(carta8);
            marcador[4].innerText = puntosJugador[3];

            const imgCarta7 = document.createElement('img');
            imgCarta7.src="IMG/blackjack/" + carta7 + ".png";
            imgCarta7.classList.add("cartas");
            const imgCarta8 = document.createElement('img');
            imgCarta8.src="IMG/blackjack/" + carta8 + ".png";
            imgCarta8.classList.add("cartas");

            divJugadorCarta4.append(imgCarta7);
            divJugadorCarta4.append(imgCarta8);

            // Jugador 5
            const carta9 = pedirCarta();
            const carta10 = pedirCarta();

            puntosJugador[4] = valorCarta(carta9) + valorCarta(carta10);
            marcador[5].innerText = puntosJugador[4];

            const imgCarta9 = document.createElement('img');
            imgCarta9.src="IMG/blackjack/" + carta9 + ".png";
            imgCarta9.classList.add("cartas");
            const imgCarta10 = document.createElement('img');
            imgCarta10.src="IMG/blackjack/" + carta10 + ".png";
            imgCarta10.classList.add("cartas");
    
            divJugadorCarta5.append(imgCarta9);
            divJugadorCarta5.append(imgCarta10);

            divJugador6.style.display="none";

        }else if(cantidadJugadores == 6){

            // Jugador 3
            const carta5 = pedirCarta();
            const carta6 = pedirCarta();
    
            puntosJugador[2] = valorCarta(carta5) + valorCarta(carta6);
            marcador[3].innerText = puntosJugador[2];
    
            const imgCarta5 = document.createElement('img');
            imgCarta5.src="IMG/blackjack/" + carta5 + ".png";
            imgCarta5.classList.add("cartas");
            const imgCarta6 = document.createElement('img');
            imgCarta6.src="IMG/blackjack/" + carta6 + ".png";
            imgCarta6.classList.add("cartas");
        
            divJugadorCarta3.append(imgCarta5);
            divJugadorCarta3.append(imgCarta6);
    
            // Jugador 4
            const carta7 = pedirCarta();
            const carta8 = pedirCarta();
    
            puntosJugador[3] = valorCarta(carta7) + valorCarta(carta8);
            marcador[4].innerText = puntosJugador[3];
    
            const imgCarta7 = document.createElement('img');
            imgCarta7.src="IMG/blackjack/" + carta7 + ".png";
            imgCarta7.classList.add("cartas");
            const imgCarta8 = document.createElement('img');
            imgCarta8.src="IMG/blackjack/" + carta8 + ".png";
            imgCarta8.classList.add("cartas");
    
            divJugadorCarta4.append(imgCarta7);
            divJugadorCarta4.append(imgCarta8);
    
            // Jugador 5
            const carta9 = pedirCarta();
            const carta10 = pedirCarta();
    
            puntosJugador[4] = valorCarta(carta9) + valorCarta(carta10);
            marcador[5].innerText = puntosJugador[4];
    
            const imgCarta9 = document.createElement('img');
            imgCarta9.src="IMG/blackjack/" + carta9 + ".png";
            imgCarta9.classList.add("cartas");
            const imgCarta10 = document.createElement('img');
            imgCarta10.src="IMG/blackjack/" + carta10 + ".png";
            imgCarta10.classList.add("cartas");
        
            divJugadorCarta5.append(imgCarta9);
            divJugadorCarta5.append(imgCarta10);

            // Jugador 6
            const carta11 = pedirCarta();
            const carta12 = pedirCarta();

            puntosJugador[5] = valorCarta(carta11) + valorCarta(carta12);
            marcador[6].innerText = puntosJugador[5];

            const imgCarta11 = document.createElement('img');
            imgCarta11.src="IMG/blackjack/" + carta11 + ".png";
            imgCarta11.classList.add("cartas");
            const imgCarta12 = document.createElement('img');
            imgCarta12.src="IMG/blackjack/" + carta12 + ".png";
            imgCarta12.classList.add("cartas");
    
            divJugadorCarta6.append(imgCarta11);
            divJugadorCarta6.append(imgCarta12);
        }

        // Si el jugador tiene 21 puntos o mas, no podra pedir más cartas
        if(puntosJugador[0] >= 21){
            botonPasar.disabled = true;    
        }else if(puntosJugador[1] >= 21){
            botonPedir2.disabled = true;
            botonPasar2.disabled = true;
        }else if(puntosJugador[2] >= 21){
            botonPedir3.disabled = true;
            botonPasar3.disabled = true;
        }else if(puntosJugador[3] >= 21){
            botonPedir4.disabled = true;
            botonPasar4.disabled = true;
        }else if(puntosJugador[4] >= 21){
            botonPedir5.disabled = true;
            botonPasar5.disabled = true;
        }else if(puntosJugador[5] >= 21){
            botonPedir6.disabled = true;
            botonPasar6.disabled = true;
        }   
    }

// Crear baraja para comenzar a repartir cartas usando bucle for

const crearBaraja = () => {
    for(let i = 2; i <= 10; i++){
        // forof porque son datos dinstintos, es string
        for (let tipo of tipoCarta) {
            baraja.push(i + tipo);
        }
    } 
        for (let tipo of tipoCarta) {
            for(let especial of cartaEspecial){    
            baraja.push(especial + tipo);
            }
        }  
    // mezclo la baraja con la funcion shuffle de undercore ya predefinida
    baraja = _.shuffle(baraja);
    //devuelvo la baraja
    return baraja;
}

// Pedir una carta  y retirarla de la baraja.

const pedirCarta = () =>{
    //saco la carta 
    const carta = baraja.pop();

    if(baraja.length === 0){
        throw "No quedan cartas";
    }
  
    return(carta);
}

// Calculamos valor de la carta

const valorCarta = (carta) => {

    let puntos = carta.substring(0, carta.length - 1);
    
    // Operador ternario
    let valor = (isNaN(puntos) ?  (puntos === 'A') ? 11 : 10 : puntos * 1);
    return valor;
}

// Repartir las cartas de la banca

 const repartirCartasBanca = () =>{

    const cartaBanca = pedirCarta();

    puntosBanca =  valorCarta(cartaBanca);
    marcadorB.innerText = puntosBanca;

    const imgCartaBanca = document.createElement('img');
    imgCartaBanca.src="IMG/blackjack/" + cartaBanca + ".png";
    imgCartaBanca.classList.add("cartas");
    
    divBancaCarta.append(imgCartaBanca);
    divBancaCarta.append(imgCartaBancaReversa);
 }


// ----------------------------------------------------------------- Botones ----------------------------------------------------------------- //


    botonNuevo.addEventListener('click', () =>{

        // pido cantidad de dinero a apostar
        cantidadApostada = Number(prompt('Introduce la cantidad a apostar'));
        
        //vuelvo a activar los botones, lo cual ya se controla  a que solo se podra usar los del jugador uno
        botonPedir.disabled = false;
        botonPasar.disabled = false;
        botonPedir2.disabled = false;
        botonPasar2.disabled = false;
        botonPedir3.disabled = false;
        botonPasar3.disabled = false;
        botonPedir4.disabled = false;
        botonPasar4.disabled = false;
        botonPedir5.disabled = false;
        botonPasar5.disabled = false;
        botonPedir6.disabled = false;
        botonPasar6.disabled = false;

        //recreo la baraja
        baraja = [];
        crearBaraja();

        // puntos a 0
        puntosBanca = 0;
        puntosJugador[0,0,0,0,0,0];

        // apuestas a 0 y el dinero siempre va a ser 500 cada vez que se empiece un nuevo juego
        apuestas = [0,0,0,0,0,0];
        dineroJ = [500,500,500,500,500,500];

        // reset de marcador y el resultado
        for(let i  = 0; i < cantidadJugadores; i++){
            marcador[i].innerHTML = 0;
            resultados[i].innerHTML = '';
        }

        // reset de apuestas y banca
        apuestas = [0,0,0,0,0,0];
        dineroJ = [500,500,500,500,500,500];

        // pongo cuanto le queda y cuanto apuesta
        for (let i = 0; i < cantidadJugadores; i++){
            dineroJ[i] =  dineroJ[i] - cantidadApostada;
            dinerosJ[i].innerHTML = 'Dinero ' + dineroJ[i];
            apuestaJ[i].innerHTML = 'Apuesta ' + cantidadApostada;
        
        }
        
        marcadorB.innerText = '0';

        divBancaCarta.innerHTML = "";
        divJugadorCarta.innerHTML = "";
        divJugadorCarta2.innerHTML = "";
        divJugadorCarta3.innerHTML = "";
        divJugadorCarta4.innerHTML = "";
        divJugadorCarta5.innerHTML = "";
        divJugadorCarta6.innerHTML = "";
      
        imgCartaBancaReversa.src="IMG/blackjack/reverso-gris.png";
        
        //vuelvo a mostrar jugadores, repartir cartas etc
        mostrarJugadores(cantidadJugadores);
        repartirCartasBanca();
        turnoJ1();

    });

// ---------------------------------------------------------------- Turnos Jugadores ---------------------------------------------------------------- //

    // empieza el jugador 1 y solo el puede hacer cosas hasta que acabe el turno
    const turnoJ1 = function(){
        botonPedir2.disabled = true;
        botonPedir3.disabled = true;
        botonPedir4.disabled = true;
        botonPedir5.disabled = true;
        botonPedir6.disabled = true;

        botonPasar2.disabled = true;
        botonPasar3.disabled = true;
        botonPasar4.disabled = true;
        botonPasar5.disabled = true;
        botonPasar6.disabled = true;
    }

    // si haces click en el botón pide una carta hasta que llegue a 21 o mas
    botonPedir.addEventListener('click', function(){

            // carta que da el crupier
            const carta = pedirCarta();
            
            // carlcular valor de carta que nos da el crupier
            puntosJugador[0] +=  valorCarta(carta);
            
            // poner en el html los puntos
            marcador[1].innerText = puntosJugador[0];
            
            // crear carta al html
            const imgCarta = document.createElement('img');
            imgCarta.src="IMG/blackjack/" + carta + ".png";
            imgCarta.classList.add("cartas");
            
            // añadir carta al div
            divJugadorCarta.append(imgCarta);

            if(puntosJugador[0] >= 21){
                botonPedir.disabled = true;
                botonPasar.disabled = true;
                botonPasar2.disabled = false;
                botonPedir2.disabled = false;
            }  
    });
    //si pulsas el botón se pasa el turno, es decir deshabilito  los botones del jugador 1 y habilito los del jugador 2
    botonPasar.addEventListener('click', function(){   
        botonPedir.disabled = true;
        botonPasar.disabled = true;  
        botonPasar2.disabled = false;
        botonPedir2.disabled = false;
    });

    //Turno J2
    botonPedir2.addEventListener('click', function(){
        
        const carta2 = pedirCarta();
        puntosJugador[1] +=  valorCarta(carta2);
        marcador[2].innerText = puntosJugador[1];

        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta2 + ".png";
        imgCarta.classList.add("cartas");

        divJugadorCarta2.append(imgCarta);

        if(cantidadJugadores == 2 && puntosJugador[1] >= 21){
            botonPedir2.disabled = true;
            botonPasar2.disabled = true;
            turnoBanca();
        }else if(cantidadJugadores!= 2 && puntosJugador[1] >= 21){
            botonPedir2.disabled = true;
            botonPasar2.disabled = true;
            botonPasar3.disabled = false;
            botonPedir3.disabled = false;
        }

    });

    botonPasar2.addEventListener('click', function(){

        if(cantidadJugadores == 2){
            turnoBanca();
        }
        botonPedir2.disabled = true;
        botonPasar2.disabled = true; 
        botonPasar3.disabled = false;
        botonPedir3.disabled = false; 
    });

    //Turno J3
    botonPedir3.addEventListener('click', function(){

        const carta = pedirCarta();
        puntosJugador[2] +=  valorCarta(carta);
        marcador[3].innerText = puntosJugador[2];

        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta + ".png";
        imgCarta.classList.add("cartas");

        divJugadorCarta3.append(imgCarta);

        if(cantidadJugadores == 3 && puntosJugador[2] >= 21){
            turnoBanca();
            botonPedir3.disabled = true;
            botonPasar3.disabled = true;
        }else if(puntosJugador[2] >= 21){
            botonPedir3.disabled = true;
            botonPasar3.disabled = true;
            botonPasar4.disabled = false;
            botonPedir4.disabled = false;
        }
    });

    botonPasar3.addEventListener('click', function(){
        if(cantidadJugadores == 3){
            turnoBanca();
        }

        botonPedir3.disabled = true;
        botonPasar3.disabled = true; 
        botonPasar4.disabled = false;
        botonPedir4.disabled = false;        
    });

    //Turno J4

    botonPedir4.addEventListener('click', function(){
        
        const carta = pedirCarta();
        puntosJugador[3] +=  valorCarta(carta);
        marcador[4].innerText = puntosJugador[3];

        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta + ".png";
        imgCarta.classList.add("cartas");

        divJugadorCarta4.append(imgCarta);

        if(cantidadJugadores == 4 && puntosJugador[3] >= 21){
            turnoBanca();
            botonPedir4.disabled = true;
            botonPasar4.disabled = true;
        }else if(puntosJugador[3] >= 21){
            botonPedir4.disabled = true;
            botonPasar4.disabled = true;
            botonPasar5.disabled = false;
            botonPedir5.disabled = false;
        }
    });

    botonPasar4.addEventListener('click', function(){

        if(cantidadJugadores == 4){
            turnoBanca();
        }

        botonPedir4.disabled = true;
        botonPasar4.disabled = true; 
        botonPasar5.disabled = false;
        botonPedir5.disabled = false;        
    });

    //Turno J5

    botonPedir5.addEventListener('click', function(){

        const carta = pedirCarta();
        puntosJugador[4] +=  valorCarta(carta);
        marcador[5].innerText = puntosJugador[4];

        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta + ".png";
        imgCarta.classList.add("cartas");
 
        divJugadorCarta5.append(imgCarta);

        if(cantidadJugadores == 5 && puntosJugador[4] >= 21){
            turnoBanca();
            botonPedir5.disabled = true;
            botonPasar5.disabled = true;
        }else if(puntosJugador[4] >= 21){
            botonPedir5.disabled = true;
            botonPasar5.disabled = true;
            botonPasar6.disabled = false;
            botonPedir6.disabled = false;
        }
    });

    botonPasar5.addEventListener('click', function(){

        if(cantidadJugadores == 5){
            turnoBanca();
        }

        botonPedir5.disabled = true;
        botonPasar5.disabled = true;
        botonPasar6.disabled = false;
        botonPedir6.disabled = false;         
    });

    //Turno J6

    botonPedir6.addEventListener('click', function(){

        const carta = pedirCarta();
        puntosJugador[5] +=  valorCarta(carta);
        marcador[6].innerText = puntosJugador[5];

        const imgCarta = document.createElement('img');
        imgCarta.src="IMG/blackjack/" + carta + ".png";
        imgCarta.classList.add("cartas");

        divJugadorCarta6.append(imgCarta);

        if(cantidadJugadores == 6 && puntosJugador[5] >= 21){
            turnoBanca();
            botonPedir6.disabled = true;
            botonPasar6.disabled = true;
        }else if(puntosJugador[5] >= 21){
            botonPedir6.disabled = true;
            botonPasar6.disabled = true;
        }

    });

    botonPasar6.addEventListener('click', function(){

        turnoBanca();
        botonPedir6.disabled = true;
        botonPasar6.disabled = true;         
    });

// Turno de la compu

const turnoBanca = () =>{

    const cartaBanca2 = pedirCarta();

    puntosBanca +=  valorCarta(cartaBanca2);
    marcadorB.innerText = puntosBanca;
    
    imgCartaBancaReversa.src="IMG/blackjack/" + cartaBanca2 + ".png";
    imgCartaBancaReversa.classList.add("cartas");

    divBancaCarta.append(imgCartaBancaReversa);

    if(puntosBanca <=17){

        do {
        const cartaB = pedirCarta();
        puntosBanca += valorCarta(cartaB);
        marcadorB.innerText = puntosBanca;

        const imgCartaB = document.createElement('img');
        imgCartaB.src="IMG/blackjack/" + cartaB + ".png";
        imgCartaB.classList.add("cartas");

        divBancaCarta.append(imgCartaB);

        if( puntosBanca > 16 ){
            break;
        }

        // Si la banca llega a 16 puntos, no tirará más cartas, por porcentajes y probabilidades de perder (nunca pierde)
        }while(puntosBanca <= 17)
    } 
        for(let i = 0; i < cantidadJugadores ; i++){

            // si la banca se pasa y el jugador no, gana el jugador y se le suma lo que apuesta * 2
            if(puntosBanca > 21 && puntosJugador[i] < 21){
                resultados[i].innerHTML= 'Ganas'
                dineroJ[i] = dineroJ[i] + cantidadApostada  * 2;
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si el jugaor se pasa pierde y no gana nada
            if(puntosJugador[i] > 21){
                resultados[i].innerHTML = 'Pierdes';
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si la bana y el jugador tienen 21 puntos empatan y se le dueleve el dinero al jugador
            if(puntosBanca == 21 && puntosJugador[i] == 21){
                resultados[i].innerHTML = 'Empate de Blackjacks';
                dineroJ[i] = dineroJ[i] + cantidadApostada;
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si la banca tiene mejor que el jugador y el jugador no se ha pasado gana el jugador
            if(puntosBanca < puntosJugador[i] && puntosJugador[i] < 21){
                resultados[i].innerHTML = 'Ganas';
                dineroJ[i] = dineroJ[i] + cantidadApostada  * 2;
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si el jugador tiene 21 pts gana y se le da lo que apuesta * 3
            if(puntosJugador[i] == 21){
                resultados[i].innerHTML = '!Blackjack¡';
                dineroJ[i] = dineroJ[i] + cantidadApostada  * 3;
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si la banca y el jugador sacan lo mismo siempre que sea menos que 21 empatan y se le duelve al jugador lo que apostó
            if(puntosBanca == puntosJugador[i] && puntosBanca < 21){
                resultados[i].innerHTML = 'Empate';
                dineroJ[i] = dineroJ[i] + cantidadApostada;
                dinerosJ[i].innerHTML = dineroJ[i];
            }
            // si el jugador saca menos que la banca y la banca saca 21 o menos, pierde
            if(puntosJugador[i] < puntosBanca && puntosBanca <= 21){
                resultados[i].innerHTML = 'Pierdes';
                dinerosJ[i].innerHTML = dineroJ[i];
            }
        }
    }

// ---------------------------------------------------------------- Main ---------------------------------------------------------------- //

crearBaraja();
mostrarJugadores(cantidadJugadores);
repartirCartasBanca();
turnoJ1();