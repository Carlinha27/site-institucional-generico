const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("js-ir-modal")) {
    modal.showModal();
  }
});

modalClose.addEventListener("click", function () {
  modal.close();
});
