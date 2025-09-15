
var is_shown = false;

function showpic(){
     pic = document.getElementById("picture");

     if (is_shown == false){
        pic.innerHTML = '<img src="images/profile-pic.jpeg" alt="profile-pic" srcset="" height="300" width="300">';
        is_shown = true;
     }
     else{
        pic.innerHTML = '';
        is_shown = false;
     }     
}




function formsubmit(event){
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;

   event.preventDefault(); // Prevent form submission

   if(name ==="" && email ===""){
      alert("Please fill in both fields Name and Email.");
   }
   else if(name ===""){
      alert("Please enter your Name.");
   }
   else if(email ===""){
      alert("Please enter your Email.");
   
    } else {
      alert("Thank you " + name + "! We have received your email: " + email);
   }
}