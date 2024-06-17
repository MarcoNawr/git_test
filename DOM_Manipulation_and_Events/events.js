const btn = document.querySelector("#btn");

// METHODS 2 & 3 (to do something by clicking the btn)
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener("click", alertFunction);
  

// EVENT Test - "e"
btn.addEventListener("click", function (e) {
    // log the HTML Element where the click was happend
    console.log(e.target);
});

btn.addEventListener("click", function (e) {
   // adjust the HTML Element where the click was happend
    e.target.style.background = "blue";
});
  

btn.addEventListener("click", function (e) {
    // log the HTML Element where the click was happend
    console.log(e);
});