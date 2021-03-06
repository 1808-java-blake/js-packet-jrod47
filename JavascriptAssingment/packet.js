// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n) {
    if(n <= 2) return 1;

    return fib(n -1) + fib(n-2);
}
console.log(fib(5));
console.log('');

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {
    for(let j=0;j<numArray.length;j++) {
        for(let i = 0; i < numArray.length; i++) {
            if(numArray[i]>numArray[i+1]) {
                let arr = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = arr;
            }
        }
    }      
    return numArray;
}
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]));
console.log('');

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
    if (someStr === "") return console.log("Undifined String");

    let newString = "";
    for(let j = someStr.length - 1; j >= 0; j--)
    
    newString += someStr[j];
    return newString;
}

console.log(reverseStr("Hello My name is Josue"));
console.log('');

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
    if (someNum < 0){
        return -1;

    }else if(someNum === 0){
        return 1;

    }else {
            
            return (someNum * factorial(someNum -1));
        }
}

console.log(factorial(5));
console.log('');

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset){

}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum){
    let a = 1&someNum;

    if (a){
        return 'Odd';
    }else{
        return 'Even';
    }
}
console.log(isEven(3333333));
console.log('');

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr){
    let eliminate = /[^A-Za-z0-9]/g;

    someStr = someStr.toLowerCase().replace(eliminate, ""); 

    for(let j =0; j < someStr.length/2; j++){
        if(someStr[j] !== someStr[someStr.length - 1 - j]){
            return 'It is not Palindrome';
        }
    }
    return 'It is Palindrome';
}
console.log(isPalindrome('aaabaaaa'));
console.log('');

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    if(shape === 'Triangle'){
        
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj){


}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

console.log(deleteElement([1,2,3,4,5]));
console.log('');

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2,1);
    console.log(someArr.length);
}

console.log(spliceElement([1,2,3,4,5]));
console.log('');
// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", 30);
console.log(john);
console.log('');

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);

function getPerson(name, age){
    let getNewPerson = {
        name: 'John',
        age: 30
    }
    return getNewPerson;
}

let johnn = getPerson("John", 30)
console.log(johnn)
console.log('');

// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(){
    let usa = document.getElementsByTagName("span");
    for (let i = 0; i < usa.length; i++){
        if(usa[i].textContent === "USA"){
            console.log(usa[i].innerHTML);
        }
    }
}

//console.log(getUSA());

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales(){
    let peopleInSales = document.getElementsByClassName("empName");

    for(let i = 0; i < peopleInSales.length; i++){
        let empDep = peopleInSales[i].parentElement.getElementsByTagName("td");
        for(let x = 0; x < empDep.length; x++){
            if(empDep[x].textContent === "Sales"){
                 console.log(peopleInSales[i].innerHTML);
            }
        }
    } 
}
//console.log(getPeopleInSales());
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren(){
    let a = document.getElementsByTagName("a");

    for(let i = 0; i < a.length; i++){
        let span = a[i].getElementsByTagName("span");
        for(let x = 0; x < span.length; x++){ 
             console.log(span[i].innerHTML); 
        }
    } 
}
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies(){
   let skill= document.getElementsByName("skills").value
   console.log(document.innerHTML = skill);
}
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute(){
    let elem = document.getElementsByTagName("*");

    for(let i=0; i<elem.length; i++){
        if(tags[i].hasAttribute("data-customAttr")){
            console.log(`Value: ${elem[i].getAttribute("data-customAttr")}`);
            console.log(`Element: ${elem[i].innerHTML}`);
        }
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

document.addEventListener('change', function() {
    document.getElementById('num1').onchange=changeEventHandler;
})

document.addEventListener('change', function() {
    document.getElementById('num2').onchange=changeEventHandler;
})

function changeEventHandler(event) {
    let num1Val = document.getElementById('num1').value;
    let num2Val = document.getElementById('num2').value;
    let sum = document.getElementById('sum');
    if (!(+num1Val + +num2Val)) {
        sum.innerHTML = "Cannot add";
    } else {
        sum.innerHTML = +num1Val + +num2Val;
    }
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let options = document.getElementsByName('skills');
for (let i of options) {
    i.addEventListener('change', function() {
        alert(`Are you sure ${this.value} is one of your skills?`);
    });
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let names = document.getElementsByClassName('empName');
for (let i of names) {
    i.addEventListener('mouseover', function() {
        if (this.style.opacity === '0') {
            this.style.opacity  = 1;
        } else {
            this.style.opacity  = 0; 
        }
    });
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function currentTime(){

    var d = new Date();
    var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("currentTime").innerHTML = n;

    setTimeout(function () {
        currentTime()
    }, 500);
}
currentTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function changeColor(){
   let color = document.getElementById("helloWorld");
    setTimeout(()=>{color.style.color = randomColors()},3000);
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}
