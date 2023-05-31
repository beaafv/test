

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  
 

};


function change() {
  document.querySelector("#menu1").classList.toggle("change");
  document.querySelector("#menu-bg").classList.toggle("disappear");
  document.querySelector("#menu-bar").classList.toggle("change");
 
 

};








const submitButton = document.querySelector(".submit1")


function functionSubmit () {


  alert("Form Submited ✅")
  
};






//  once the button is selected on the packages and services section, it sellects the correspondent radio button option 

function check () {
  document.getElementById("Basic").checked = true; 
}


  function checkPremium () {
    document.getElementById("Premium").checked = true; 
  }

  function checkGold () {
    
    document.getElementById("Gold").checked = true; 
    
  }

 
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
   

  


  function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active3");
      } else {
        reveals[i].classList.remove("active3");
      }
    }
  }
  
  window.addEventListener("scroll", reveal3);

 

  
