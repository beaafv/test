

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  
  document.getElementById("menu-bg").classList.toggle("change-bg");
};



const firstName= document.querySelector(".bride1");

const lastName = document.querySelector(".groom1");

const weddingDate = document.querySelector(".weddingdate1");

const mobileNumber = document.querySelector(".number1");

const sellectedbtn = document.querySelector('.button123');



 


const submitButton = document.querySelector(".submit1")


function functionSubmit () {


  alert("Form Submited ✅")
  
};



const btn = document.querySelector('.button123');



//  once the button is selected on the packages and services section, it sellects the correspondent radio button option 

function check() {
  document.getElementById("Basic").checked = true; 
}


  function changeText() {
    document.getElementById("Premium").checked = true; 
  }

  function myFunction () {
    document.getElementById("Gold").checked = true; 
    
  }




  const form = document.getElementById("form");
  form.addEventListener("submit", formSubmit);

  function formSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);

      fetch("https://getform.io/f/121fffe2-aaa8-47d2-bc83-66252f74fd9d", {
          method: "POST",
          body: formData,
          headers: {
              "Accept": "application/json",
          },
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }