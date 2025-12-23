document.getElementById("form").addEventListener('submit', (ev) => {
    ev.preventDefault();
    const email = document.getElementById("email");
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (email.value === "" || !email.value.match(regex)) {
        email.classList.add("border-danger")
    }
    else {
        email.classList.remove("border-danger");
    }
})