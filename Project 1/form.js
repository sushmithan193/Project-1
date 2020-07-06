function validation(){
  var lname = document.getElementById("lname").Value;
  var fname = document.getElementById("fname").Value;
  var phone = document.getElementById("phone").Value;
  var mail = document.getElementById("mail").Value;
  var msg = document.getElementById("msg").Value;
  var error_message = document.getElementById("error_message");  
  var text;

  error_message.style.padding = "20px";

      if(lname.length < 5){
      text = "Please Enter Valid nom";
      error_message.innerHTML = text;
      return false;
 }


     if(fname.length < 5){
     text = "Please Enter Valid Prenom";
  error_message.innerHTML = text;
   return false;
  }

  
   if(isNaN(phone) || phone.length !== 10){   //by giving isNaN we are checking only numbers are entered and next we are checking the phone number should be exactly to 10
   text = "Please Enter Valid Telephone";
  error_message.innerHTML = text;
  return false;
  }

  if(mail.indexof("@") === -1 || email.length < 6){  // email adress should contain @ symbol and the length should be greater than 6
  text = "Please Enter Valid Adresse mail";
 error_message.innerHTML = text;
 return false;
 }

 if(Msg.length <= 5){  // Message should be greater than or equal to 50 characters 
 text = "Please Enter More Than 50 Characters";
 error_message.innerHTML = text;
 return false;
 }

  alert("MERCI Votre message a bien été envoyé ! Nous essaierons d’y répondre au mieux dans les plus brefs délais. À bientot chez Mr.Coffee")
  return true;
}





























//function validateEmail(InputText)
//{
  //var mailFormat = ".+@globex.com"
  ////var mailFromat = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //if(InputText.value.match(mailFormat))
 // {
  //  alert("You have entered a valid email address");
    //document.form1.text1.focus();
    //return true;
  //}
  //else{
   // alert("you have entered an invalid email address");
    //document.form1.text.focus();
    //return false;
  //}
//}



 
  






//function customAlert(){
//this.render = function(){
//var winW = window.innerWidth;
//var winH = window.innerHeight;
//var dialogoverlay = document.getElementById('dialogoverlay');
//var dialogbox = document.getElementById('dialogbox');
//dialogoverlay.style.display = "block";
//dialogoverlay.style.height = winH+"px";
//dialogbox.style.left = (winW/2) - (550 * .5)+"px";
//dialogbox.style.top = "100px";
//dialogbox.style.display = "block";
//document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
//document.getElementById('dialogboxbody').innerHTML = dialog;
//document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
//}
//this.ok = function(){

//}
//}
//var Alert = new customAlert();















//function fn1()
//{
//  var str1 = document.getElementById("submit").value;
  //alert("Value inside the text box is: "+str1);

  //var str2 = document.getElementById("text").value;
  //var str3 = document.getElementById("number").value;
  
//}

























//function revealMessage(){
  //document.getElementById("hiddenMessage").style.display ='block';
//}


  //let movies = [];
  //const addnom =(ev) =>{
    //ev.preventDefault();
    //let nom = {
      //id = data.now(),
      //title=document.getElementById('title').value,
      //year=document.getElementById('yr').value
    //};
    //nom.push(nom);
    //document.forms[0].reset();

    //console.warn('added' , {nom});
    //let pre = document.queryselector('msg pre');
    //pre.textcontent = '\n' + JSON.stringify(nom, '\t', 2);

  //}
  //docu/ment.addeventListener('DOMContentLoaded', ()=>{
    //document.getElementById('btn').addEventListener('click', addnom)
  //}
  //);
