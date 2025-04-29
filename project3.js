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

// Albums audio songs and controls 
document.addEventListener("DOMContentLoaded", () => {
  const albumData = [
    { title: "Call Me If You Get Lost", tracks: [
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
    ]},
    { title: "Soft Spot", tracks: [
      "Music/Soft Spot - Tracklist/JMSN - Love Me (Audio).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Cherry Pop [Audio].mp3", 
      "Music/Soft Spot - Tracklist/JMSN - 2 High (Audio).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Feel Like A Woman (Official Video).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Soft Spot (Audio) 4.mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Happens Everytime (Audio).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Not 4 U (Audio).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Groovy (Audio).mp3", 
      "Music/Soft Spot - Tracklist/JMSN - Outsider (Audio).mp3"
    ]},
    { title: "In Search Of", tracks: [
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
    ]},
    { title: "Gemini Rights", tracks: [
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
    ]}
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

    // Playback Controls
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

// QUIZ 1 JS
const albumResults = {
  "Soft Spot": {
    img: "Images/albumCovers/SoftSpotAC.jpg",
    description: "You're a deep thinker who values heartfelt connections and cozy vibes. 'Soft Spot' captures your smooth, soulful energy perfectly."
  },
  "Call Me If You Get Lost": {
    img: "Images/albumCovers/cmiyglAC.jpg",
    description: "You’re bold, adventurous, and love to experience life to the fullest. 'Call Me If You Get Lost' matches your wild, free spirit."
  },
  "In Search Of...": {
    img: "Images/albumCovers/InSearchOfAC.jpg",
    description: "You’re rebellious, experimental, and full of energy. 'In Search Of...' captures your unpredictable, electric nature."
  },
  "Gemini Rights": {
    img: "Images/albumCovers/GeminiRightsAC.png",
    description: "You’re a dreamy, artsy soul who follows your own path. 'Gemini Rights' mirrors your colorful, introspective personality."
  }
};

const selectedAnswers = {};
const quizButtons = document.querySelectorAll(".answer-buttons button");

quizButtons.forEach(button => {
  button.addEventListener("click", function () {
    const parentSection = button.closest("section");
    const questionId = parentSection.id;
    const nextSection = parentSection.nextElementSibling;

    // Deselect previous choice
    button.parentElement.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    // Save selected album tied to question ID
    selectedAnswers[questionId] = button.getAttribute("data-album");

    // Scroll to next question
    if (nextSection && nextSection.classList.contains('quiz-question')) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }

    // If all 5 questions answered, show result
    if (Object.keys(selectedAnswers).length === 5) {
      setTimeout(showPersonalityResult, 800);
    }
  });
});

function showPersonalityResult() {
  const counts = {};

  Object.values(selectedAnswers).forEach(album => {
    counts[album] = (counts[album] || 0) + 1;
  });

  let topAlbum = null;
  let maxCount = 0;

  for (const album in counts) {
    if (counts[album] > maxCount) {
      topAlbum = album;
      maxCount = counts[album];
    }
  }

  if (topAlbum) {
    const resultData = albumResults[topAlbum];
    const resultSection = document.getElementById("quiz-result");
    
    document.getElementById("result-img").src = resultData.img;
    document.getElementById("result-title").textContent = topAlbum;
    document.getElementById("result-description").textContent = resultData.description;

    resultSection.style.display = "block";
    resultSection.classList.add("fade-in");
    resultSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Quiz 2 JS
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Example correct answers listed
const correctAlbums = [
"Call Me If You Get Lost",
"Soft Spot",
"In Search Of...",
"Gemini Rights",
"Call Me If You Get Lost",
"Soft Spot",
"In Search Of...",
"Gemini Rights"
];

const quizQuestions = document.querySelectorAll('.quiz-question');
const resultSection = document.getElementById('quiz-result');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');

quizQuestions.forEach((question, index) => {
const buttons = question.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Disables all buttons after one is clicked
    buttons.forEach(btn => btn.disabled = true);

    if (button.textContent === correctAlbums[index]) {
      correctAnswers++;
    }

    // After last question, show result
    if (index === quizQuestions.length - 1) {
      showLyricResult();
    } else {
      // Scroll to next question
      quizQuestions[index + 1].scrollIntoView({ behavior: 'smooth' });
    }
  });
});
});

function showLyricResult() {
resultSection.style.display = 'block';
resultSection.scrollIntoView({ behavior: 'smooth' });

if (correctAnswers === 8) {
  resultTitle.textContent = "The Ultimate Listener!";
  resultMessage.textContent = "You know these albums like the back of your hand!";
  document.getElementById('result-img').src ="Images/quizImgs/quiz2ResultImg/Result1.png";
} else if (correctAnswers >= 4) {
  resultTitle.textContent = "A So-So Music Expert.";
  resultMessage.textContent = "You know some albums, but there's room to grow!";
  document.getElementById('result-img').src ="Images/quizImgs/quiz2ResultImg/Result2.png";
} else {
  resultTitle.textContent = "Tone Deaf.";
  resultMessage.textContent = "Maybe it's time to listen a little closer!";
  document.getElementById('result-img').src ="Images/quizImgs/quiz2ResultImg/Result3.png";
}
}