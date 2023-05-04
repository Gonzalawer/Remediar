const userNameField = document.querySelector("[name=username]");
const MailField = document.querySelector("[name=email]");
const BusinessField = document.querySelector("[name=business]");
const MessageField = document.querySelector("[name=message]");

console.log(userNameField, MailField, BusinessField, MessageField);

// e: evento - target: constante (userNameField) value: el valor o contenido de la constante
userNameField.addEventListener("blur", function (e) {
    const field = e.target.value;
    const fieldValue = e.target.value;
    if (fieldValue.length === 0) {
        field.parentElement.insertAdjacentHTML(
            "beforeend",
            "<span>Debes colocar un nombre</span>"
        );
    }
})




  