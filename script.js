
// Picture Toggle

function showpic(id){
     pic = document.getElementById(id);
     pic_btn = document.getElementById("pic-btn");

     if (pic.style.display === "none"){
         pic.style.display = "block";
         pic_btn.innerText = "Hide Picture";
         
     }
     else {
         pic.style.display = "none";
         pic_btn.innerText = "Show Picture";  
       }   
}

// Education Section Toggle
function education(id){
    edu = document.getElementById(id);
    edu_btn = document.getElementById("edu-btn");

    if (edu.style.display === "none"){
        edu.style.display = "block";
        edu_btn.innerText = "Hide Education";
    }
      else {
         edu.style.display = "none";
         edu_btn.innerText = "See Education";  
       }
}

// Form Validation
function formsubmit(event){
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let message = document.getElementById("message");

   if(name ==="" && email ===""){
      event.preventDefault();
      message.textContent = "Please Enter Your Name and Email.";
      message.style.color = "red";
   }
   else if(name ===""){
      event.preventDefault();
      message.textContent = "Please enter your Name.";
      message.style.color = "red";
   }
   else if(email ===""){
      event.preventDefault();
      message.textContent = "Please enter your Email.";
      message.style.color = "red";
   }
   else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
         event.preventDefault();
         message.textContent = "Please enter a valid email address";
         message.style.color = "red";
         return;
      }
      alert("Thank you " + name + "! We have received your email: " + email);
   }
}

// complete ...................................................