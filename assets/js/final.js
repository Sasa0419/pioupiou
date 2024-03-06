
   
 const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
document.getElementById("login-toggle").addEventListener("click", function () {​
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
}​);
document.getElementById("register-toggle").addEventListener("click", function () {​
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
}​);
    
    
  
  

