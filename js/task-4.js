const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const emailEl = event.currentTarget.elements.email;
    const passwordEl = event.currentTarget.elements.password;
    if (!emailEl.value || !passwordEl.value) {
        alert("All form fields must be filled in")
        return;
    }

    const formData = {
        [emailEl.name]: emailEl.value.trim(),
        [passwordEl.name]: passwordEl.value.trim(),
    }

    console.log(formData);
    formEl.reset();
}
