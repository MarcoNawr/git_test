// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown


// ###############################
 // Übung 1
 // ##############################


// Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
// For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const output = document.querySelector('.output');. In comments, we've provided you with three code lines that need to be used somewhere inside the loop:
// const para = document.createElement('p'); — creates a new paragraph.
// output.appendChild(para); — appends the paragraph to the output <div>.
// para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.
// Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple para.textContent = lines):
// If the number is 10, print "Countdown 10" to the paragraph.
// If the number is 0, print "Blast off!" to the paragraph.
// For any other number, print just the number to the paragraph.
// Remember to include an iterator! However, in this example we are counting down after each iteration, not up, so you don't want i++ — how do you iterate downwards?

// Note: If you start typing the loop (for example (while(i>=0)), the browser might get stuck because you have not yet entered the end condition. 
// So be careful with this. You can start writing your code in a comment to deal with this issue and remove the comment after you finish.


const resultDiv = document.querySelector(".output");

function exersiseOne(){
for(i=10; i>=0; i--){
    console.log(i);
    const para = document.createElement('p');
    if(i == 10){
        para.innerHTML = "Countdown <br>" + i + "<br>";
    }else if (i == 0){
        para.innerHTML = "Blast of";
    }else{
    para.innerHTML = i + "<br>";
    }
    resultDiv.appendChild(para);

}
}

// ###############################
 // Übung 2
 // ##############################

//  Active learning: Filling in a guest list
//  In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.
 
//  Specifically, we want you to:
 
//  Write a loop that will iterate through the people array.
//  During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
//  If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
//  If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.
//  We've already provided you with:
 
//  refused.textContent += — the beginnings of a line that will concatenate something at the end of refused.textContent.
//  admitted.textContent += — the beginnings of a line that will concatenate something at the end of admitted.textContent.
//  Extra bonus question — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one. Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end? Have a look at the Useful string methods article for help.
 
//  If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

const resultDiv2 = document.querySelector(".output2"); 

function exersiseTwo(){
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');

    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    for(const person of people){
        if(person === "Phil" || person === "Lola"){
            refused.textContent += person + ", ";
        }else{
            admitted.textContent += person + ", ";
        }
    }

    //", " am Ende der Strings entferen
    if("," === refused.textContent[refused.textContent.length-2]){
        refused.textContent = refused.textContent.substring(0,refused.textContent.length - 2);
    }

    if("," === admitted.textContent[admitted.textContent.length-2]){
        admitted.textContent = admitted.textContent.substring(0, admitted.textContent.length - 2);
    }
 }


 // ###############################
 // Übung 3
 // ##############################

//  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
//  In our first looping task we want you to start by creating a simple loop that goes through all the items
//   in the provided myArray and prints them out on the screen inside list items (i.e., <li> elements), 
//     which are appended to the provided list.

 function exerciseThree(){
    const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    for(const element of myArray){
        let li = document.createElement('li'); // Listelement erstellen
        li.appendChild(document.createTextNode(element)); // definieren was das Listelemt ist
        list.appendChild(li);    // das Listelement der UL zuordnen
    }

    const section = document.querySelector('section');
    section.appendChild(list);
 }