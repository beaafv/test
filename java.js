var navbarMenu = document.getElementById('navbarMenu');
var navbarToggle = document.getElementById('navbarToggle');

function toggleMenu() {
  if (window.innerWidth <= 767) {
    navbarMenu.style.display = (navbarMenu.style.display === 'flex') ? 'none' : 'flex';
  }
}

function closeMenuOnClickOutside(event) {
  if (window.innerWidth <= 767 && !navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
    navbarMenu.style.display = 'none';
  }
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    navbarMenu.style.display = 'flex';
  } else {
    navbarMenu.style.display = 'none';
  }
});

window.addEventListener('click', function(event) {
  closeMenuOnClickOutside(event);
});

navbarMenu.addEventListener('click', function(event) {
  if (event.target.tagName === 'A' && window.innerWidth <= 767) {
    navbarMenu.style.display = 'none';
  }
});

// Close the menu on page load
window.addEventListener('load', function() {
  if (window.innerWidth <= 767) {
    navbarMenu.style.display = 'none';
  } else {
    navbarMenu.style.display = 'flex';
  }
});

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

 
  document.getElementById("btn").addEventListener("click", changePicture);

function changePicture() {
  let image = document.querySelector('.imagegallerymobile img');
  let imagens = ['img/w2.jpg', 'img/w4.jpg','img/w3.jpg', 'img/katelyn-macmillan-MtwNya-3mac-unsplash.jpg'];
  let random = Math.floor(Math.random() * 4 );
  image.src = imagens [random];
};


        
  
