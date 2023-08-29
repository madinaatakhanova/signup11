const errText = document.querySelector(`.err-text`)
const register = document.querySelector(`.register`)
const modal = document.querySelector(`.modal`)
// const closeModal = document.querySelector(`.close`)
register.addEventListener(`click`, (e) => {
   modal.classList.toggle(`active`)
})


// closeModal.addEventListener(`click`, (e) =>{
//    modal.classList.remove(`active`)
// })
// ! modal end


// ? registert start
document.addEventListener("DOMContentLoaded", function () {
   var users = [];
 
   var signupForm = document.getElementById("signup-form");
   var userList = document.getElementById("user-list");
 
   // Ma'lumotlar saqlash uchun Local Storage ni ishlatamiz
   var savedUsers = JSON.parse(localStorage.getItem("users")) || [];
   users = savedUsers;
 
   signupForm.addEventListener("submit", function (event) {
     event.preventDefault();
 
     var nameInput = signupForm.querySelector("#name");
     var emailInput = signupForm.querySelector("#email");
     var password1Input = signupForm.querySelector("#password1");
     var password2Input = signupForm.querySelector("#password2");
 
     if (password1Input.value !== password2Input.value) {
         let hedaer = document.querySelector(`#header`)
         hedaer.style.display = `none`

         let  modals  = document.querySelector(`.open-modal`)
         modal.style.display = `none`
        
         errText.style.display = `block`
     }
     else{
         alert(`Your account successfully`)
         nameInput.value = ``;
         emailInput.value = ``;
         password1Input.value = ``;
         password2Input.value = ``;
     }
 
     var newUser = {
       id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
       name: nameInput.value,
       email: emailInput.value,
       psw : password1Input.value
     };
 
     users.push(newUser);
 
     // Foydalanuvchi ro'yxatini Local Storage ga saqlash
     localStorage.setItem("users", JSON.stringify(users));
 
     updateUsersList();
 
     nameInput.value = "";
     emailInput.value = "";
     password1Input.value = "";
     password2Input.value = "";
   });
 
   
 
   // Ma'lumotlarni to'ldirish va saqlangan ma'lumotlarni olish
   updateUsersList();
 });
 