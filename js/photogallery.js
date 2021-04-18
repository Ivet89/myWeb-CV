const slides = document.querySelectorAll(".slide");

slides.forEach(function (oneslide) {
  oneslide.addEventListener("click", function () {
    // active sa vymaze vsetkzm
    deleteActiveClass();
    oneslide.classList.add("active");
  });

});

function deleteActiveClass() {
  slides.forEach(function (mySlide) {
    mySlide.classList.remove("active");
  })
}