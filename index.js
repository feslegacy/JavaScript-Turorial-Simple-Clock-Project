// 1.Ways to Print in JavaScript
// console.log("Hello World")
// document.write("This is document write")
// alert("me")

// 2. JavaScript console API
// console.log("Hello World", 4+6, "Another log")
// comsole.warn("This is warning")
// console.error("This is Error")

// 3.JavaScript Variables
// What are Variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2)

// 4.Data Types in JavaScript
// Numbers
var num1 = 10;
var num2 = 20.5;
// Strings
var str1 = "this is a string";
var str2 = "this is also a string";
// Objects
var marks = {
  Ali: 15,
  Ahmed: 30,
  Faraz: 40,
  Harry: 28.5,
};

// console.log(marks)

// Boolean
var a = true;
var b = false;

// var und = undefined
var und;

var n = null;
// console.log(n)

// At a very high level , there are two types of data types in JavaSript
// 1.Primitve data types : undefined , null , number , string , boolean , symbol
// 2.Reference data types : Arrays and Objects

var arr = [1, 2, 3, 4, 5];

// Operaters
// Arithemetic Operators

var a = 12;
var b = 6;

// console.log("The value of a + b is" , a+b)
// console.log("The value of a - b is" , a-b)
// console.log("The value of a * b is" , a*b)
// console.log("The value of a / b is" , a/b)

// Assignment Operators

var c = b;
c += 2;
// console.log(c)

// Comparision Operators

var x = 25;
var y = 36;
// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)
// console.log(x > y)
// console.log(x < y)

// Logical Operators

// and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// // not
// console.log(!true)
// console.log(!false)

/* Function in JavaScript

function avg(a , b){
        c = (a + b)/2
        return c
}

// DRY = Do not repeat yourself

c1 = avg(4 , 6)
c2 = avg(5 , 8)
console.log(c1 , c2) */

/* Single if Statement
var age = 19
if (age > 18){
        console.log("You can drive") */

/* if - else statement
var age = 9
if (age > 18){
        console.log("You can drive")
}
else{
        console.log("You cannot drive")
} */

/* if-else Ladder
 
var age = 20
if (age > 40){
        console.log("You are old")
}
else if (age > 18){
        console.log("You are young")
}
else if (age > 12){
        console.log("You are teen")
}
else if (age > 2){
        console.log("You are kid")
}
console.log("End of Ladder") */

// Loops in Java Script

// For Loop

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//         if (i==3){
//                 break;
//                 continue
//         }
//         console.log(arr[i]);
// }

// arr.forEach(function(element){
//         console.log(element)
// })

// while loop

// let j = 0;
// while(j<arr.length){
//         console.log(arr[j]);
//         j ++
// }

// do {
//         console.log(arr[j])
//         j++
// } while (j < arr.length)

let myArr = ["Fan" , "Camera" , null , 34 , false]
// Array Methods
// console.log(myArr.length)
// myArr.pop()
// myArr.shift()
myArr.unshift("harry")
// myArr.push("harry")
// console.log(myArr)

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good"
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(2 , 4))
d = myLovelyString.replace("Harry" , "Ron")
d = d.replace("good" , "bad")
// console.log(d , myLovelyString)

let myDate = new Date()
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())

// DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container')
// console.log(elemClass);
// elemClass[0].style.background = 'yellow'
// let elemtext = document.getElementsByClassName('text')
// console.log(elemtext)
// // elemtext[0].style.background = 'cyan'
// elemtext[0].classList.add("bgprimary")
// elemtext[0].classList.add("textcolor")
// tn = document.getElementsByTagName('div')
// console.log('tn')
// createdElement = document.createElement('p')
// createdElement.innerText = "This is a created para"
// tn[0].appendChild(createdElement);

// Events in JavaScript

// function clicked() {
//         console.log("the button was clicked")
// }

// window.onload = function(){
//         console.log("document was loaded")
// }

// firstContainer.addEventListener('mouseover' , function(){
//         console.log("Mouse over on container")
// })
// firstContainer.addEventListener('mouseout' , function(){
//         console.log("Mouse on container")
// })
// firstContainer.addEventListener('mouseup' , function(){
//         console.log("Mouseup on container")
// })
// firstContainer.addEventListener('mousedown' , function(){
//         console.log("Mousedown on container")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup' , function(){
//         document.querySelectorAll('.container')[1].innerHTML = prevHTML
//         console.log("Mouseup on when clicked on container")
// })

// firstContainer.addEventListener('mousedown' , function(){
//         document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//         console.log("Mousedown when clicked container")
// })


// Arrow Functions
// function summ(a , b){
//         return a+b;
// }
summ = (a,b )=>{
        return a+b;
}

// setTimeout  adn setInterval

// login = ()=>{
//         document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//         console.log("I am your log")
// }
// // setTimeout(login , 2000)
// clr = setInterval(login , 2000)

// JavaScript Local Storage
// localStorage.setItem('name' , 'harry')
// localStorage
// localStorage.getItem('name')
// localStorage.clear()
// localStorage.removeItem('name')

// JSON
// obj = {name: "harry", length :1}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name": "harry", "length" :1}')
// console.log(parsed)









