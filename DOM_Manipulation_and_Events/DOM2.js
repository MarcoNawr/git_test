const link = document.querySelector("#mozillaLink");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
section.appendChild(para);
// Change after appending works as well:
para.textContent = "I was changed after appendChild";

const text = document.createTextNode(" — the premier source for web development knowledge.");
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Move to the end
section.appendChild(linkPara);

// Remove 
//section.removeChild(linkPara);
// OR (New Browsers)
//linkPara.remove();
// OR (Od Browsers) 
linkPara.parentNode.removeChild(linkPara);

// Adding inline styles
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";


para.setAttribute("class", "highlight");
