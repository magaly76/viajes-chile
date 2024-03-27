document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



$(document).ready(function () {
    $("img[src='assets/img/viajes.svg']").click(function () {
        alert("Recorre de mar a cordillera con nuestra guía de rutas");
    });
});

