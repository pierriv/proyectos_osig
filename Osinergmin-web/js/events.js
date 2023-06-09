/* ==== ELECTRICIDAD ==== */

/* ==== FIN ELECTRICIDAD ==== */

$(document).ready(function () {

    /* ==== ELECTRICIDAD ==== */

    /* $(".btn-open-content-data-map").on("click", function () {
        $(".content-data-map").addClass("open");
    }); */

    $(".btn-close-content-data-map").on("click", function () {
        $(".content-data-map").removeClass("open");
    });

    /* ==== FIN ELECTRICIDAD ==== */

    /* >>>>>>>> Modal <<<<<<<<<< */

    $(".btn-open-modal").on("click", function () {
        let idModal = $(this).attr("id-modal");

        blockScroll();

        $("#" + idModal).toggleClass("open-modal");
        setTimeout(function () {
            $("#" + idModal + " > .form-modal").toggleClass("open-form");
        }, 300);

    });

    $(".btn-close-modal").on("click", function () {
        let idModal = $(this).attr("id-modal");

        unblockScroll();

        $("#" + idModal + " > .form-modal").toggleClass("open-form");
        setTimeout(function () {
            $("#" + idModal).toggleClass("open-modal");
        }, 300);
        var b = $("#iframeContenedor");
        if (b.length > 0){
            $("#iframeContenedor").attr("src", "");
        }
    });

    $("#btnSearch").on("click", function () {
        var txt = $("#txtSearch").val();
        location.href = "https://gisem.osinergmin.gob.pe/validar/observatorio3/pages/busqueda.html?txtSearch="+txt;
    });
    $(".btn-modal-contenedor").on("click", function (e) {
        var url = $(e.currentTarget).parent().children('iframe').attr('src');
        $("#iframeContenedor").attr("src", url);
    });

    window.addEventListener("click", function (e) {
        /* if(e.target == document.querySelectorAll(".modal")[0]){ */
        if (e.target.id.includes("modal")) {
            $(".form-modal").removeClass("open-form");

            unblockScroll();

            setTimeout(function () {
                $(".modal").removeClass("open-modal");
            }, 300);
        }
    });

    function blockScroll() {
        $('html,body').addClass('block-scroll');
    }

    function unblockScroll() {
        $('html,body').removeClass('block-scroll');
    }

    /* >>>>>>>> Slider <<<<<<<<<< */

    const slider = document.querySelector('.slide-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider != null) {
        slider.addEventListener('mousedown', (e) => {

            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    }
});