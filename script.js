
is_shown = false;

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