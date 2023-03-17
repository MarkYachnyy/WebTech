Gallery_Images = [].slice.call(document.querySelectorAll(".photo__section__image"));
Overlay = document.querySelector(".zoom__overlay");
Close_Button = document.querySelector(".zoom__overlay__close__btn");

Gallery_Images.forEach((element) => {
    element.addEventListener("click",() => {
        document.querySelector(".zoomed__image").src = element.src;
        Overlay.style.display = 'flex';
    })
})

Close_Button.addEventListener("click", () => {
    Overlay.style.display = 'none';
})