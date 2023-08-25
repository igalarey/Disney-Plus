document.addEventListener("DOMContentLoaded", function () {
    var headerSticky = document.getElementById("headerSticky");
    var header = document.getElementById("header");
    var trigger = document.getElementById("trigger");
    var posicion = trigger.getBoundingClientRect().top;

    function animacionHeader() {
        var scrollPos =
            window.scrollY ||
            window.scrollTop ||
            document.getElementsByTagName("html")[0].scrollTop;

        if (scrollPos >= posicion) {
            headerSticky.style.zIndex = 2;
            headerSticky.style.opacity = 1;
            header.style.zIndex = 1;
            header.style.opacity = 0;
        } else {
            headerSticky.style.zIndex = 1;
            headerSticky.style.opacity = 0;
            header.style.zIndex = 2;
            header.style.opacity = 1;
        }
    }

    window.addEventListener("scroll", animacionHeader);
    animacionHeader();
});
