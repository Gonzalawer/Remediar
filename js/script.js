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

/* Botón Subir */
const toTop = (() => {
    let button = document.getElementById("toTop");
    window.onscroll = () => {
        button.classList[
            (document.documentElement.scrollTop > 200) ? "add" : "remove"
        ]("is-visible")
    }
    button.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
})();

/* desplazamiento suave links */
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
    });
});