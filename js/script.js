// ELEMENTS

const priceKm = 0.21 ;
const ticket = document.querySelector('.ticket');


// INPUT
const inputfullname = document.querySelector('.inputfullname');
const inputkm = document.querySelector('.inputkm');

// BUTTONS
const generate = document.querySelector('.generate');
const reset = document.querySelector('.reset');


generate.addEventListener('click', function(){
  // ticket.classList.toggle('d-block'); NON FUNZIONA
  const name = inputfullname.value;
  document.querySelector('.ticket .fullname').innerHTML += name;
  // inserire offerta in base al select
  
  // generare numero random carrozza
  const wagonrandom = Math.floor(Math.random() * 11);
  document.querySelector('.ticket .wagon').innerHTML += wagonrandom;
  // generare numero random booking
  const bookingNumber = Math.floor(Math.random() * 90000) + 10000;
  document.querySelector('.ticket .bookingID').innerHTML += bookingNumber;
  // calcolo costo biglietto
})