let currentImageIndex = 0;
const images = [
    "https://scansource.com.br/wp-content/uploads/2023/01/6_tendencias_tecnologia_2023.jpg",
    "https://conecta.tec.mx/sites/default/files/inline-images/tecnologia-longevidad-sustentabilidad-tec-2023-tendencias.jpg",
    "https://www.murcia.com/noticias/fotos/19012023928371w.jpg",
    "https://www.zitelia.com/wp-content/uploads/2022/12/5dec47012d257.png"
];

function showImage(index) {
    document.getElementById("slider-img").src = images[index];
    currentImageIndex = index;
}

function showAntImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
function showSigImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function toggleGalleryView() {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.classList.toggle("active");

    const sliderImage = document.getElementById("slider-img");
    sliderImage.classList.toggle("hidden");

    const galleryToggleBtn = document.getElementById("gallery-toggle");
    galleryToggleBtn.textContent = galleryContainer.classList.contains("active") ? "Ocultar Imagenes" : "Ver vista galería de imágenes";
}

document.addEventListener("DOMContentLoaded", function() {
    showImage(currentImageIndex);
    
});