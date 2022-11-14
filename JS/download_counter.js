(function () {
    function ready() {
        let loaded = Date.now();
        document.getElementById("load-speed").outerText = ((loaded - now_time) / 1000).toString();
    }

    let now_time = Date.now();
    document.addEventListener("DOMContentLoaded", ready);
})();

