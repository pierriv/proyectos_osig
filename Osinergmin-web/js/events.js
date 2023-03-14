$(document).ready(function () {

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

    /* >>>>>> Actions NavBar <<<<<<*/

    /* Active menú */
    /* $("nav ul li a").on("click", function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    }); */

    /* Colapse menú */
    /* $("#toggle-nav-bar").on("click", function () {
        $(".nav-bar").toggleClass("nav-bar-colapse");
    }); */

    /* Content full colapse */
    /* $("#btn-full-content").on("click", function () {
        $(".content").toggleClass("full");
    }); */

});