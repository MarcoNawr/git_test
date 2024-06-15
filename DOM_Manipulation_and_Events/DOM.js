// ###############################################
// Exercise 1 
// ###############################################

//FROM: https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise

const content = document.querySelector(".content");
// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:   

//######
// a <p> with red text that says “Hey I’m red!”
//######

// CREATE
    const para = document.createElement("p");

// CHANGE
    para.textContent = "Hey I’m red!";
    para.setAttribute("style", "color: red;");

// APPEND
    content.appendChild(para);


//######
// an <h3> with blue text that says “I’m a blue h3!”
//######

// CREATE
    const h3 = document.createElement("h3");

// CHANGE
    h3.textContent = "I’m a blue h3";
    h3.setAttribute("style", "color: blue;");

// APPEND
    content.appendChild(h3);


//######
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
//######

// CREATE
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const para2 = document.createElement("p");

// CHANGE
    div.setAttribute("style", "background-color: pink; border: 1px solid black;");
    h1.textContent = "I’m in a div";
    para2.textContent = "ME TOO!";

// APPEND
    div.appendChild(h1,para2);
    div.appendChild(para2);
    content.appendChild(div);



// ###############################################
// Exercise 2
// ###############################################