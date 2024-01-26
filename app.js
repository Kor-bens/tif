// let index = 0;
// const images = document.querySelectorAll(".carousel-images img");
// const numberOfImages = images.length;

// // Fonction pour démarrer le défilement
// function startCarousel() {
//   setInterval(() => {
//     index++;
//     if (index >= numberOfImages) {
//       index = 0;
//     }
//     document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
//   }, 1000); // Changer toutes les 3 secondes
// }

// // Fonction pour contrôler le carrousel avec la souris
// function setupMouseControls() {
//   let startX;
//   let isDragging = false;

//   document.querySelector(".carousel").addEventListener('mousedown', (e) => {
//     startX = e.clientX;
//     isDragging = true;
//   });

//   document.querySelector(".carousel").addEventListener('mouseup', () => {
//     isDragging = false;
//   });

//   document.querySelector(".carousel").addEventListener('mouseleave', () => {
//     isDragging = false;
//   });

//   document.querySelector(".carousel").addEventListener('mousemove', (e) => {
//     if (isDragging) {
//       const x = e.clientX;
//       const walk = (x - startX) * 10; // scroll-fast
//       document.querySelector(".carousel-images").style.transform = `translateX(${walk}px)`;
//     }
//   });
// }

// // Démarrer le carrousel
// startCarousel();

// // Ajouter le contrôle par la souris
// setupMouseControls();