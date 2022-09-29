var Owu = 5;
var ChineseSalad = 5;
var item3 = 5;
let total = Owu+ChineseSalad;
let finaltotal = 20;
var item1 = document.getElementById('paragraph1');
var item2 = document.getElementById('paragraph2');
var Seedetails =document.getElementById("See");
var Seedetails2 =document.getElementById("See2");
var item3 = document.getElementById('paragraph3');

var item4 = document.getElementById('paragraph4');

var item5 = document.getElementById('paragraph5');

var item6 = document.getElementById('paragraph6');

var item7 = document.getElementById('paragraph7');

var item8 = document.getElementById('paragraph8');

function Userdetails(){
  alert("Banga soup");
}

function order1(){
  
  item1.innerHTML = "Added";
}
function order2(){
  
  item2.innerHTML = "Added";
}
function order3(){
  
  item3.innerHTML = "Added";
}
function order4(){
  
  item4.innerHTML = "Added";
}
function order5(){
  
  item5.innerHTML = "Added";
}
function order6(){
  
  item6.innerHTML = "Added";
}
function order7(){
  
  item7.innerHTML = "Added";
}
function order8(){
  
  item8.innerHTML = "Added";
}
function remove(){
  item1.innerHTML="";
}
function remove1(){
  item2.innerHTML = "";
}
function remove2(){
  item3.innerHTML="";
}
function remove3(){
  item4.innerHTML="";
}
function remove4(){
  item5.innerHTML="";
}
function remove5(){
  item6.innerHTML="";
}
function remove6(){
  item7.innerHTML="";
}
function remove7(){
  item8.innerHTML="";
}

function Price (){
Seedetails.innerHTML = `You picked \n Owu Soup \nChinese Salad\n\n\n Chinese spiced \n\n\nSandwish \n\nTotal price\n\n\nOwu Soup =   $${Owu}\n\n\nChinese Salad = $${ChineseSalad}\n\n\nChinese spiced = $${Owu}\n Sandwish = $${Owu}\n\n\n $${Owu}+$${ChineseSalad}+$${Owu}+$${ChineseSalad} = $${total}+$${total}\n = $${finaltotal}`;
}
function Removedetails (){
  Seedetails.innerHTML = "";
}
/*function price2(){
 if(item3.className === item4.className &&item3.className !== item1.className&& item3.className !== item5.className && item3.className !== item7.className){
  alert(`You picked \n Chinese spiced \nSandwish\n Total price\nChinese spiced =   $${Owu}\n sandwish  = $${ChineseSalad}\n\n $${Owu}+$${ChineseSalad} = $${total}`);
 }
  else{
    alert("something went wrong");
  
}
*/





