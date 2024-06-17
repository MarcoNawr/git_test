let btn = document.querySelector('#btn');

function handleClick() {
    alert('It was clicked!');
}

btn.addEventListener('click', handleClick);

// ##########################################################################
// ALTERNATIVE 1! "anonymous function"
// ##########################################################################

/*
let btn = document.querySelector('#btn');

btn.addEventListener('click',function() {
    alert('It was clicked!');
});
*/


// ##########################################################################
// ALTERNATIVE 2! "arrow function"
// ##########################################################################

/*
let btn = document.querySelector('#btn');

btn.addEventListener('click',() => {
    alert('It was clicked!');
});
*/
