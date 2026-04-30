var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function openMenu() {
    document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
}