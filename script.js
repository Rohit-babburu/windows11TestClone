let taskbar = document.getElementsByClassName("taskBar")[0];
let startmenu = document.getElementsByClassName("startMenu")[0];

taskbar.addEventListener("click", () => {
    if(startmenu.style.bottom == "50px")
    {
        startmenu.style.bottom = "-655px";
    }
    else{
        startmenu.style.bottom = "50px";
    }
})