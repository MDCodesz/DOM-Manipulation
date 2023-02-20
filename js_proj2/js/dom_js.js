const ambtn = document.getElementById('am');
const pmbtn = document.getElementById('pm'); 

ambtn.addEventListener('click', () => {
    //document.getElementById('greeting').innerHTML = 'Good Morning!';
    let greet = document.getElementById('greeting');
    greet.innerHTML = 'Good morning!';
})

pmbtn.addEventListener('click', () => {
    let greet = document.getElementById('greeting');
    greet.innerHTML = 'Good night!';
})


const redbtn = document.getElementById('red');
const yellowbtn = document.getElementById('yellow');
const greenbtn = document.getElementById('green');
const bluebtn = document.getElementById('blue');

redbtn.addEventListener('click', () => {
    let bg = document.getElementById('div_color');
    bg.setAttribute('class', 'bg_red');
})

yellowbtn.addEventListener('click', () => {
    let bg = document.getElementById('div_color');
    bg.setAttribute('class', 'bg_yellow');
})

greenbtn.addEventListener('click', () => {
    let bg = document.getElementById('div_color');
    bg.setAttribute('class', 'bg_green');
})

bluebtn.addEventListener('click', () => {
    let bg = document.getElementById('div_color');
    bg.setAttribute('class', 'bg_blue');
})


const input = document.querySelector('#usrInput'); 
const addbtn = document.querySelector('#addBtn');
const list = document.querySelector('#myUL'); 

addbtn.addEventListener('click', () => {
    const item = input.value;   // input value 
    input.value = '';   // clears the user input field

    var listItem = document.createElement('li'); // creates node
    listItem.innerHTML = item;  // puts the new list item onto the document
    list.appendChild(listItem); // add to the list
})

