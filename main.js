document.addEventListener("DOMContentLoaded", function() {
  // Initialize a Swiper object for popular content slideshows
  var swiper = new Swiper(".popular-content", {
    slidesPerView: 1, // Displays one slide per view
    spaceBetween: 10, // Distance between slides
    autoplay: { // Settings to automatically play slideshow
      delay: 5500, // Delay time between slides (in milliseconds)
      disableOnInteraction: false // Does not auto disable on user interaction
    },
    pagination: { // Configure pagination (slide numbering)
      el: ".swiper-pagination", // Location of the pagination element
      clickable: true // Allows the user to click on the slide number
    },
    navigation: { // Configure navigation buttons
      nextEl: ".swiper-button-next", // Next slide button
      prevEl: ".swiper-button-prev" // Previous slide button
    },
    breakpoints: { // Breakpoints for responsive slideshows
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  // Get the movie playback button element
  let playButton = document.querySelector(".bx.bx-right-arrow.play-movie");
  // Gets the video container element
  let video = document.querySelector(".video-container");
  // Get the video element
  let myvideo = document.getElementById("myvideo");
  // Get the button element to close the video
  let closebtn = document.querySelector(".close-video");

  // Event listener for movie play button clicks
  playButton.addEventListener("click", function() {
    // Add class to display video
    video.classList.add("show-video");
    // Start video playback
    myvideo.play();
  });

  // Tambahkan event listener untuk tombol tutup video
  closebtn.addEventListener("click", function() {
    // Hapus class untuk menyembunyikan video
    video.classList.remove("show-video");
    // Hentikan pemutaran video
    myvideo.pause();
    // Setel ulang waktu video ke awal
    myvideo.currentTime = 0;
  });
});