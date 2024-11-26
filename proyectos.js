document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    // Mostrar la primera diapositiva
    showSlide(currentIndex);

    // Funcionalidad de desvanecimiento
    slides.forEach(slide => {
        slide.addEventListener("mouseover", () => {
            slide.querySelector("img").style.opacity = "0.3";
            slide.querySelector(".slide-text").style.opacity = "1";
        });

        slide.addEventListener("mouseout", () => {
            slide.querySelector("img").style.opacity = "1";
            slide.querySelector(".slide-text").style.opacity = "0";
        });
    });
});
