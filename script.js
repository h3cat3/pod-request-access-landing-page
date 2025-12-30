document.getElementById("form").addEventListener('submit', (ev) => {
    ev.preventDefault();
    const email = document.getElementById("email");
    const errorMsg =document.getElementById("error");
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (email.value === "" || !email.value.match(regex)) {
        email.classList.add("border-4", "border-red-500")
        errorMsg.style.display = "block";

    }
    else {
        email.classList.remove("border-4", "border-red-500");
        errorMsg.style.display = "none";
       

    }
})