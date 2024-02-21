// ELEMENTS

const priceKm = 0.21 ;
const ticket = document.querySelector('.ticket');


// INPUT
const inputfullname = document.querySelector('.inputfullname');
const inputkm = document.querySelector('.inputkm');

// BUTTONS
const generate = document.querySelector('.submit');
const reset = document.querySelector('.reset');


genera.addEventListener('click', function(){
  // ticket.classList.toggle('d-block'); NON FUNZIONA
  const name = inputfullname.value;
  document.querySelector('.fullname').innerHTML += name;
  // inserire offerta in base al select
  // generare numero random carrozza
  // generare numero random booking
  // calcolo costo biglietto
})