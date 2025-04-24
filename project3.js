// Slideshow JS
let slideIndex = 1;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function goToSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

window.onload = function () {
  showSlides(slideIndex);
  setInterval(() => {
    changeSlide(1);
  }, 4000);
};

// Albums Audio
document.addEventListener("DOMContentLoaded", () => {
  const albumData = [
    {
      title: "Soft Spot",
      tracks: [
        "Music/Soft Spot - Tracklist/JMSN - Love Me (Audio).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Cherry Pop [Audio].mp3",
        "Music/Soft Spot - Tracklist/JMSN - 2 High (Audio).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Feel Like A Woman (Official Video).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Soft Spot (Audio) 4.mp3",
        "Music/Soft Spot - Tracklist/JMSN - Happens Everytime (Audio).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Not 4 U (Audio).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Groovy (Audio).mp3",
        "Music/Soft Spot - Tracklist/JMSN - Outsider (Audio).mp3"
      ]
    },
    {
      title: "In Search Of",
      tracks: [
        "Music/In Search Of - Tracklist/Lapdance 4.mp3",
        "Music/In Search Of - Tracklist/Things Are Getting Better 4.mp3",
        "Music/In Search Of - Tracklist/Brain.mp3",
        "Music/In Search Of - Tracklist/Provider 4.mp3",
        "Music/In Search Of - Tracklist/Truth Or Dare 4.mp3",
        "Music/In Search Of - Tracklist/Tape You 4.mp3",
        "Music/In Search Of - Tracklist/Run To The Sun 4.mp3",
        "Music/In Search Of - Tracklist/Baby Doll 4.mp3",
        "Music/In Search Of - Tracklist/Am I High 4.mp3",
        "Music/In Search Of - Tracklist/Rockstar.mp3",
        "Music/In Search Of - Tracklist/Bobby James 4.mp3",
        "Music/In Search Of - Tracklist/Stay Together 4.mp3"
      ]
    },
    {
      title: "Gemini Rights",
      tracks: [
        "Music/Gemini Rights - Tracklist/Steve Lacy - Static (Visualizer) 4.mp3",
        "Music/Gemini Rights - Tracklist/Helmet 4.mp3",
        "Music/Gemini Rights - Tracklist/Mercury 4.mp3",
        "Music/Gemini Rights - Tracklist/Buttons 4.mp3",
        "Music/Gemini Rights - Tracklist/Bad Habit 4.mp3",
        "Music/Gemini Rights - Tracklist/2Gether (Enterlude) 4.mp3",
        "Music/Gemini Rights - Tracklist/Cody Freestyle 4.mp3",
        "Music/Gemini Rights - Tracklist/Amber 4.mp3",
        "Music/Gemini Rights - Tracklist/Steve Lacy - Sunshine (Visualizer) 4.mp3",
        "Music/Gemini Rights - Tracklist/Give You the World 4.mp3"
      ]
    },
    {
      title: "Call Me If You Get Lost",
      tracks: [
        "Music/CMIYGL - Tracklist/SIR BAUDELAIRE 4.mp3",
        "Music/CMIYGL - Tracklist/CORSO 4.mp3",
        "Music/CMIYGL - Tracklist/LEMONHEAD 4.mp3",
        "Music/CMIYGL - Tracklist/WUSYANAME 4.mp3",
        "Music/CMIYGL - Tracklist/LUMBERJACK 4.mp3",
        "Music/CMIYGL - Tracklist/HOT WIND BLOWS 4.mp3",
        "Music/CMIYGL - Tracklist/MASSA 4.mp3",
        "Music/CMIYGL - Tracklist/RUNITUP 4.mp3",
        "Music/CMIYGL - Tracklist/MANIFESTO 4.mp3",
        "Music/CMIYGL - Tracklist/SWEET _ I THOUGHT YOU WANTED TO DANCE 4.mp3",
        "Music/CMIYGL - Tracklist/MOMMA TALK 4.mp3",
        "Music/CMIYGL - Tracklist/RISE! 4.mp3",
        "Music/CMIYGL - Tracklist/BLESSED 4.mp3",
        "Music/CMIYGL - Tracklist/JUGGERNAUT 4.mp3",
        "Music/CMIYGL - Tracklist/WILSHIRE 4.mp3",
        "Music/CMIYGL - Tracklist/SAFARI 4.mp3"
      ]
    }
  ];

  const albumCards = document.querySelectorAll(".album-card");

  albumCards.forEach((card, index) => {
    const player = card.querySelector(".audioPlayer");
    const source = player.querySelector("source");
    const backBtn = card.querySelector(".backBtn");
    const playBtn = card.querySelector(".playBtn");
    const forwardBtn = card.querySelector(".forwardBtn");

    let currentTrack = 0;
    const playlist = albumData[index]?.tracks || [];

    const loadTrack = (i) => {
      if (!playlist[i]) return;
      source.src = playlist[i];
      player.load();
    };

    loadTrack(currentTrack);

    // Playback Controls JS
    backBtn?.addEventListener("click", () => {
      currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrack);
      player.play();
    });

    forwardBtn?.addEventListener("click", () => {
      currentTrack = (currentTrack + 1) % playlist.length;
      loadTrack(currentTrack);
      player.play();
    });

    playBtn?.addEventListener("click", () => {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    });
  });
});
