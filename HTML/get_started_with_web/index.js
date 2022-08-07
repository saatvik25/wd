// string methods
console.log("I am javascript")
let firststring = "html css javascript in web web web  development"
console.log(firststring.length)
console.log(firststring.indexOf("css"))
console.log(firststring.lastIndexOf("web"))
console.log(firststring.substring(5,10))
console.log(firststring.slice(5,10))  //slice() extracts a part of a string and returns the extracted part in a new string.


//js dates
let d = new Date();
// console.log("today date is ",d);

console.log(d.getDay());  //count start from 0 (sunday).......etc
console.log(d.getFullYear())
console.log(d.getTime())
console.log(d.getHours())
const date = d;
// document.getElementById("demo").innerHTML = d;



//DOM MANIPULATION
let elem  = document.getElementById("btn");
console.log(elem)

let c = document.getElementsByClassName("container");
console.log(c)

// c[0].style.background = "black" 
c[0].classList.add("container2")

console.log(elem.innerHTML);
console.log(c[0 ].innerText)

d =document.getElementsByTagName("div");
console.log(d);


//selecting using query selector

sel = document.querySelector(".container");
console.log(sel)



//javascript events

function clicked(){
    console.log("button is clicked")

}
window.onload = function(){
    console.log("page is loaded")
}
     //event listner -> "click", mousover
firstContainer.addEventListener('click' , function(){
    document.querySelectorAll()
    console.log("click is done");
})

firstContainer.addEventListener('mouseover' , function(){   //firstContainer IS ID WE ADD  ID RO EVENT LISTNer 
    console.log("click is done");
}) 


//loops for 
let text="";
const alpha = ["a","b","c","d","e","f"];
for(let i=0;i<alphamlength;i++){
    text += cars[i]+"<br>";
}


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, textt;
for (i = 0, len = cars.length, textt = ""; i < len; i++) {
  text += cars[i] + "<br>";
}


//arrow function 
let myfunction =(a,b)=> a*b;

myfunction(5,2)


////////////////////////////////////////////////////////////////////////////////////////////////


