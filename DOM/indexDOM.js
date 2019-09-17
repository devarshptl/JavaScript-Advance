
// query  selector
let para = document.querySelector(".para");
console.log(para);

para.innerHTML = "inner";


// query selector all

let para1 = document.querySelectorAll("p");
console.log(para1);

para1[0].innerHTML = "Hello";


/*                     styling              */
 /* let sub = document.querySelector(".submit");
sub.style.backgroundColor = "red";
sub.style.color = "white";
sub.style.fontSize = "3em";
sub.style.padding = "1.5em"; */ 
  /*   OR   */
let sub1 = document.querySelector("input[type = submit]");
sub1.classList.add("class");



// create element
let p1 = document.createElement("p");
let p2 = document.createElement("p");


p1.textContent = "First Paragraph";
p2.textContent = "Second Paragraph";

const content = document.querySelector(".content");
content.appendChild(p1);

document.body.appendChild(p2);

//  attribute
p1.setAttribute("class","para1");
p1.setAttribute("class","para");

//p1.removeAttribute("class");



/*           Data Attribute            */

let nav = document.querySelectorAll(".navbar");
console.log(nav[0].getAttribute("data-number")); //0
console.log(nav[1].getAttribute("data-number")); // 1
console.log(nav[1].dataset.number); // 1
console.log(nav[0].dataset.name); // navbar


/*         className Property          */
let toggle = document.querySelector(".toggle");

let color = function(flag){
    if(flag){
        toggle.className = "toggle_in";
    }
    else{
        toggle.className = "toggle.out";
    }
}

color(false);

/*             Events            */

function display(){
    document.querySelector(".date1").innerHTML = Date();
}

document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector(".para3").innerHTML = "using Event Listner";
    document.querySelector(".para3").style.color = "red";
})




/*                      focus and blur                */
let form = document.getElementById("form");

form.addEventListener("focus",function(event){
    event.target.style.backgroundColor = "blue";
},true);

form.addEventListener("blur",function(event){
    event.target.style.backgroundColor = "white";
},true);





