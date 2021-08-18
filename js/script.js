const openIcon = document.getElementById("open_icon");
const closeIcon = document.getElementById("close_icon");
const nav = document.getElementById("nav");

openIcon.addEventListener("click", open=> {
    nav.classList.add("open_nav");
    openIcon.classList.add("hide_open_icon");
    closeIcon.style.display="block";
});

closeIcon.addEventListener("click", close => {
    nav.classList.remove("open_nav");
    openIcon.classList.remove("hide_open_icon");
    closeIcon.style.display="none";

    let a = true;
});