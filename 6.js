function up(){
var data = new Date();
var item = document.getElementById("p1");
item.innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
var mn = document.getElementById("p2");
mn.innerHTML = data.getFullYear() + ":" + parseInt(data.getMonth()+1) + ":" + data.getDate();
}
setInterval(up,100);

function color(){
var i = document.getElementById("input1").value;
localStorage.setItem("var",i);

document.getElementById("body1").style.background = localStorage.getItem("var");
}

function setcolor(){
    document.getElementById("input1").value = localStorage.getItem("var");
 
    document.getElementById("body1").style.background = localStorage.getItem("var");
}
onload = setcolor();