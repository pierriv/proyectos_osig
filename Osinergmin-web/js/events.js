$(document).ready(function () {

    /* >>>>>>>> Modal <<<<<<<<<< */

    $(".btn-open-modal").on("click", function(){
        let idModal = $(this).attr("id-modal");

        blockScroll();

        $("#" + idModal).toggleClass("open-modal");
        setTimeout(function(){
            $("#" + idModal + " > .form-modal").toggleClass("open-form");
        },300);
        
    });

    $(".btn-close-modal").on("click", function(){
        let idModal = $(this).attr("id-modal");
        
        unblockScroll();

        $("#" + idModal + " > .form-modal").toggleClass("open-form");
        setTimeout(function(){
            $("#" + idModal).toggleClass("open-modal");
        },300);
    });

    window.addEventListener("click", function(e){
        /* if(e.target == document.querySelectorAll(".modal")[0]){ */
        if(e.target.id.includes("modal")){
            $(".form-modal").removeClass("open-form");

            unblockScroll();
            
            setTimeout(function(){
                $(".modal").removeClass("open-modal");
            },300);
        }
    });

    function blockScroll(){
        $('html,body').addClass('block-scroll');
    }

    function unblockScroll(){
        $('html,body').removeClass('block-scroll');
    }
    

    /* >>>>>>>> Slider <<<<<<<<<< */

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* >>>>>> Actions NavBar <<<<<<*/

    /* Active menú */
    $("nav ul li a").on("click", function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    /* Colapse menú */
    /* $("#toggle-nav-bar").on("click", function () {
        $(".nav-bar").toggleClass("nav-bar-colapse");
    }); */

    /* Content full colapse */
    /* $("#btn-full-content").on("click", function () {
        $(".content").toggleClass("full");
    }); */

    /* >>>>>>>>> FILTER ITEMS <<<<<<<<<< */

    $(".filter-buttons-container .btn-filter").on("click", function () {

        let idContentItems = $(this.parentNode).attr("id-content-filter");
        let idItemFilter = $(this).attr("items");

        $(".filter-buttons-container .btn-filter").removeClass("active");
        $(this).addClass("active");

        if (idItemFilter == "todos") {
            $(".filter-container > div").removeClass("hidden");
        } else {
            $(".filter-container > div").addClass("hidden");
            $(".filter-container ." + idItemFilter).removeClass("hidden");
        }

    });

    /* >>>>>>>>> Search Actions <<<<<<<<<< */

    let optionsSearch = [
        {
            "url": "Indice-de-Transicion-Energetica.html",
            "value": "Índice de Transición Energética combustible"
        },
        {
            "url": "Produccion-por-tipo-de-combustible.html",
            "value": "Producción por tipo de combustible"
        }
    ]

    $(".search input").on("keyup", function () {
        let result = undefined;
        let optionsHTML = "";

        if (this.value.length > 5) {

            result = optionsSearch.filter(p => p.value.toLowerCase().indexOf(this.value.toLowerCase()) >= 0);
            console.log(result);
            if (result != undefined || result.length > 0) {
                result.map(function (option) {
                    optionsHTML = optionsHTML + '<a href="' + option.url + '">' + option.value + '</a>'
                });
            } else {
                optionsHTML = "";
            }

        }
        document.getElementById("search-options").innerHTML = optionsHTML;

    });


});