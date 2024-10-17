let tvimgEl = document.getElementById("tvimg");
let personimgEl = document.getElementById("personimg");
let bulbimgEl = document.getElementById("bulbimg");

let count = 1;
function show(){
    if(count === 1){
    tvimgEl.src = "images/4.jpg";
    personimgEl.src = "images/5.jpg";
    bulbimgEl.src = "images/6.jpeg";
    count = 0;
    }
    else{
    tvimgEl.src = "images/1.jpg";
    personimgEl.src = "images/2.jpg";
    bulbimgEl.src = "images/3.jpeg";
    count = 1;   
    }
}