const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeModal = document.querySelector(".close");

galleryItems.forEach(item => {
  item.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = this.src;
  });
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
