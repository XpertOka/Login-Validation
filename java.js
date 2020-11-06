$("h1").mouseleave(function () { 
  $(this).css("transition","3s")
});

$("#btn2").click(function () { 
  $("#qeyd").toggle("")
   
});

$("#btn1").click(function () { 
  $("#giris").toggle("slow")
   
});

$("#btn1").click(function () { 
  $("#slider").toggle("slow")
   
});


var back = document.getElementById("fontnext");
var next = document.getElementById("fontback");
var body = document.getElementById("body");
var clas = document.getElementsByClassName("img")

var arxa= new Array(
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
)
let i=0;
next.onclick=function(){
  if(i<3){
    body.style.backgroundImage='url('+ arxa[i+1]+')';
    body.style.transition="2s"
    clas[i+1].classList.add("active");
    clas[i].classList.remove("active");
    i++;
  
    
  }
}
back.onclick=function(){
  if(i>0){
    body.style.backgroundImage='url("'+ arxa[i-1]+'")';
    body.style.transition="2s"
    clas[i-1].classList.add("active");
    clas[i].classList.remove("active");
    i--;
    
  }
}

var form = document.getElementById("form");
var ad = document.getElementById("ad");
var soyad = document.getElementById("soyad");
var username = document.getElementById("username");
var email = document.getElementById("email");
var dogum = document.getElementById("dogum");
var sifre1 = document.getElementById("sifre1");
var sifre2 = document.getElementById("sifre2");

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function error (input,mesaj) { 

  input.className="form-control is-invalid";
  var div =input.nextElementSibling;
  div.innerText=mesaj;
  div.className="invalid-feedback"

 };

function succes (input){

  input.className="form-control is-valid"
};


function sifre(input1,input2){
  if(sifre1.value !== sifre2.value){
    error(input2,"Daxil etdiyiniz sifreler uygun deyil")
  }
}





form.addEventListener("submit",function(e){

  e.preventDefault();

  if(ad.value===""){
    error(ad,"Adinizi daxil edin")

  }else{
    succes(ad)
  }
  if(soyad.value===""){
    error(soyad,"Soyadinizi daxil edin")
  }else{
     succes(soyad)
  };

  if(username.value===""){
    error(username,"Istifadeci adi daxil edin")
  }else if(username.value.length<5){
    error(username,"Istifadeci adi en az 5 herfden ibaret olmalidir")
  }else if(username.value.length>15){
     error(username,"Istifadeci adi en az 15 herfden ibaret olmalidir")
  }
  else{
    succes(username)
  }

  if(email.value===""){
    error(email,"Mail adresi daxil edin")
  }else if(!validateEmail(email.value)){
    error(email,"Duzgun mail adresi daxil edin")
  }
  else{
    succes(email)
  }
  
  if(dogum.value===""){
    error(dogum,"Dogum tarixinizi daxil edin")
  }else{
    succes(dogum)
  }
  if(sifre1.value===""){
    error(sifre1,"Sifre daxil edin")
  }else{
    succes(sifre1)
  }
  if(sifre2.value===""){
    error(sifre2," Tekrar sifre daxil edin")
  }else{
    succes(sifre2)
  };

sifre(sifre1,sifre2);









  
});




