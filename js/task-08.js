const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }} = event.currentTarget
    
    if (email.value === "" || password.value === ""){
        alert(`Будь ласка заповніть усі поля`);
    
    }
    console.log(`Login: ${email.value}, password: ${password.value}`);
};
