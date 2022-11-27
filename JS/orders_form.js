document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let form = document.querySelector('form');
    form.addEventListener("submit", onSubmit);
    if (localStorage.getItem("array") === null) {
        localStorage.setItem("array", JSON.stringify([]))
    }
    else {
        addOrderNames();
    }
}

function onSubmit(event) {
    event.preventDefault();
    let order_name = document.getElementById("order-name").value;
    document.getElementById("order-name").value = '';
    let order_names = JSON.parse(localStorage.getItem("array"));
    order_names.push(order_name);
    localStorage.setItem("array", JSON.stringify(order_names));
    addOrderNames();
}

function addOrderNames() {
    let htmlCode = ""
    let order_names = JSON.parse(localStorage.getItem("array"));
    console.log(localStorage.getItem("array"))
    for (let i = 0; i < order_names.length; i++) {
        htmlCode += "<div class='order-form-name'>" + order_names[i] + "</div>";
    }
    document.getElementById("order-names").innerHTML = htmlCode;
}