// ELEMENTS

const priceXKm = 0.21 ;
const discountYoung = 20;
const discountSenior = 40;
const ticket = document.querySelector('.ticket');


// BUTTONS
const btnGenera = document.getElementById('genera');
const btnReset = document.getElementById('reset');


// inizio di tutte le funzioni con il click genera
btnGenera.addEventListener('click', function(){

    // salvo i dati di partenza
    const nome = document.getElementById('name').value; // assegno il valore dell'input name alla nuova variabile nome.
    const km = parseInt(document.getElementById('km').value);
    const age = document.getElementById('fascia-eta').value;
    
    const prezzo = km * priceXKm;
    let prezzoFinale = prezzo;
    let tipoBiglietto = 'Biglietto Standard';
  
    // calcolo il costo del biglietto
    if(age === 'minorenne'){
      prezzoFinale *= 1 - discountYoung/100;
      tipoBiglietto = 'Sconto Minorenne';
    }else if(age === 'over65'){
      prezzoFinale *= 1 - discountSenior/100;
      tipoBiglietto = 'Sconto Senior'
    }
      
    // stampo dati negli elementi HTML
    document.getElementById('fullname').innerHTML += nome;
    document.getElementById('offer').innerHTML += tipoBiglietto;
    document.getElementById('ticketfinal').innerHTML += prezzoFinale;
  
  
    // generare numero random carrozza
    const wagonrandom = Math.floor(Math.random() * 11);
    document.querySelector('#wagon').innerHTML += wagonrandom;
  
    
    // // generare numero random booking
    const bookingNumber = Math.floor(Math.random() * 90000) + 10000;
    document.querySelector('#bookingID').innerHTML += bookingNumber;

    document.getElementById('wrapper-biglietto').classList.remove('d-none');
  })
  
  
  // reset function
  btnReset.addEventListener('click', function(){
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';
    
    
    document.getElementById('wrapper-biglietto').classList.add('d-none');
  })
  

