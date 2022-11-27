(function () {
    let file = document.location.pathname.split("/");
    file = file[file.length - 1];

    let menu = document.getElementsByClassName("menu");

    for (let i = 0; i < menu.length; i++)
    {
        let elem = menu[i].outerHTML;

        if (elem.includes(file) > 0)
            menu[i].classList.add("active");
    }
})();