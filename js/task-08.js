const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const elementsForm = event.currentTarget.elements;
    
    const mail = elementsForm.email.value;
    const password = elementsForm.password.value;
    const formData = {
        mail, password
    }
    
    if (!mail || !password){
        alert('All fields must be filled');
        return;
    };

    console.log(formData);
    formEl.reset();
};