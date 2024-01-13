
const formElem = document.querySelector(".login-form");
formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const userEmeil = email.value.trim();
    const userPassword = password.value.trim();
    if (!userEmeil || !userPassword) {
     return  alert ("All form fields must be filled in")
   }
    const objSub = {
        email: userEmeil,
        password: userPassword,
    };
    console.log(objSub);
    event.currentTarget.reset();  
}
