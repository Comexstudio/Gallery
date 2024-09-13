const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");
const loadMoreBtn = document.getElementById("load-more-btn");
const loader = document.getElementById("loader");
const gallery = document.getElementById("gallery");
let page = 1;
const imagesPerPage = 6;

// Array de imágenes adicionales
let newImages = [
  "img/surf school 14.jpeg",
  "img/surf school 15.jpeg",
  "img/surf school 16.jpeg",
  "img/surf school 17.jpeg",
  "img/surf school 18.jpeg",
  "img/surf school 19.jpeg",
  "img/surf school 20.jpeg",
  "img/surf school 21.jpeg",
  "img/surf school 22.jpeg",
  "img/surf school 23.jpeg",
  "img/surf school 24.jpeg",
  "img/surf school 26.jpeg",
  "img/surf school 27.jpeg",
];

// Función para habilitar el modal
function enableModal(img) {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.src;
  });
}

// Cerrar modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Cuando el contenido está cargado, habilitar modal para las imágenes iniciales
document.addEventListener("DOMContentLoaded", function() {
  const initialGalleryItems = document.querySelectorAll(".gallery-item");
  initialGalleryItems.forEach(item => {
    enableModal(item);
  });
});

// Cargar más imágenes
loadMoreBtn.addEventListener("click", function () {
  loader.style.display = "block";

  setTimeout(() => {
    const start = (page - 1) * imagesPerPage;
    const end = page * imagesPerPage;
    const imagesToLoad = newImages.slice(start, end);

    if (imagesToLoad.length > 0) {
      imagesToLoad.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("gallery-item");
        img.alt = `Image ${src}`;
        img.loading = "lazy";
        gallery.appendChild(img);
        enableModal(img); // Habilitar modal para las nuevas imágenes
      });

      page++;
      loader.style.display = "none";

      if (end >= newImages.length) {
        loadMoreBtn.style.display = "none";
      }
    }
  }, 1000); // Simula la carga
});
