/*
Active learning: A dynamic shopping list
In this challenge we want to make a simple shopping list example that allows you to dynamically add items to the list using a form input and button. When you add an item to the input and press the button:

- The item should appear in the list.
- Each item should be given a button that can be pressed to delete that item off the list.
- The input should be emptied and focused ready for you to enter another item.

Demo layout of a shopping list. A 'my shopping list' header followed by 'Enter a new item' with an input field and 'add item' button. The list of already added items is below, each with a corresponding delete button. 
To complete the exercise, follow the steps below, and make sure that the list behaves as described above.

1. To start with, download a copy of our shopping-list.html starting file and make a copy of it somewhere. 
    You'll see that it has some minimal CSS, a div with a label, input, and button, and an empty list and <script> element. 
    You'll be making all your additions inside the script.
2. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
3. Create a function that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current value of the input element in a variable.
5. Next, empty the input element by setting its value to an empty string — ''.
6. Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
7. Append the span and the button as children of the list item.
8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
9. Append the list item as a child of the list.
10.Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
*/


//2. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

//3. Create a function that will run in response to the button being clicked.
btn.addEventListener("click", () => {
    //4. Inside the function body, start off by storing the current value of the input element in a variable.
    let currentValue = input.value;
    //5. Next, empty the input element by setting its value to an empty string — ''.
    input.value = "";
    //6. Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    let li = document.createElement("li");
    let span = document.createElement("span");
    let libtn = document.createElement("button");
    //7. Append the span and the button as children of the list item.
    li.appendChild(span);
    li.appendChild(libtn);
    //8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    span.textContent = currentValue;
    libtn.textContent = "DELETE";
    //9. Append the list item as a child of the list.
    ul.appendChild(li);

    //10.Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    libtn.addEventListener("click", () => {
        li.remove();
        input.focus();
    });
    //11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();
});

