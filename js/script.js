/* Menu */
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown__menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

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

