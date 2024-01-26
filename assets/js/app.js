const track = document.querySelector('.carousel-track');

track.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});

// let index = 0;
// const images = document.querySelectorAll(".carousel-images img");
// const numberOfImages = images.length;

// setInterval(() => {
//   index++;
//   if (index >= numberOfImages) {
//     index = 0;
//     // Pour éviter l'animation lors du retour à la première image
//     document.querySelector(".carousel-images").style.transition = 'none';
//     document.querySelector(".carousel-images").style.transform = 'translateX(0)';
//     // Redéclencher l'animation après le reflow
//     setTimeout(() => {
//       document.querySelector(".carousel-images").style.transition = 'transform 0.5s ease';
//     });
//   } else {
//     document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
//   }
// }, 3000); // Change toutes les 3 secondes

// let index = 0;
// const images = document.querySelectorAll(".carousel-images img");
// const numberOfImages = images.length - 1; // Exclure la dernière image dupliquée du compte

// setInterval(() => {
//   index++;
//   // Remettre à zéro l'index après la dernière image originale pour une boucle continue
//   if (index > numberOfImages) {
//     index = 0;
//     // Désactiver l'animation lors du réglage de l'index à 0
//     document.querySelector(".carousel-images").style.transition = 'none';
//     document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
//     // Forcer le reflow du navigateur
//     void document.querySelector(".carousel-images").offsetWidth;
//     // Réactiver l'animation après le reflow
//     setTimeout(() => {
//       document.querySelector(".carousel-images").style.transition = 'transform 0.5s ease';
//     }, 10); // Un court délai pour réactiver la transition
//   } else {
//     // Animer le passage à l'image suivante
//     document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
//   }
// }, 3000); // Change toutes les 3 secondes

const images = document.querySelectorAll(".carousel-images img");
const numberOfOriginalImages = images.length / 2; // Si vous avez dupliqué chaque image une fois

document.querySelector(".carousel-images").style.width = `${images.length * 100}%`; // Ajustez la largeur de .carousel-images
images.forEach(img => img.style.width = `${100 / images.length}%`); // Ajustez la largeur de chaque image