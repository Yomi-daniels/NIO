window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#000000";
    header.style.opacity = "75%";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
// const videos = document.querySelector("video");
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");
// const button4 = document.getElementById("button4");
// const button5 = document.getElementById("button5");
// const video2 = document.getElementById("Video2");
// const video1 = document.getElementById("Video1");

// button2.addEventListener("click", () => {
//   video2.style.display = "block";
//   video2.style.opacity = "1";
//   videos.style.opacity = "0";
//   button2.style.borderBottom = "1px solid #000000";
//   button2.style.color = "#000000";
//   button1.style.borderBottom = "none";
//   video2.classList.add("active");
//   video1.classList.remove("active");
// });
// button1.addEventListener("click", () => {
//   video2.style.opacity = "0";
//   video1.classList.add("active");
//   video1.style.opacity = "1";
//   button1.style.borderBottom = "1px solid #000000";
//   button2.style.borderBottom = "none";
// });

const buttons = document.querySelectorAll(".video-handler-container button");
const videoContainers = document.querySelectorAll(".video-container");
const videoElements = document.querySelectorAll("video");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    videoContainers.forEach((videoContainer, vidIndex) => {
      if (index === vidIndex) {
        gsap.to(videoContainer, {
          opacity: 1,
          duration: 0.1,
          ease: "power1.in",
          onStart: () => {
            videoContainer.style.display = "block";
            videoElements[vidIndex].play();
          },
        });
        button.style.borderBottom = "2px solid black";
        button.style.color = "black";
      } else {
        gsap.to(videoContainer, {
          opacity: 0.7,
          duration: 0.1,
          ease: "power1.in",
          onComplete: () => {
            videoContainer.style.display = "none";
            videoElements[vidIndex].pause();
            videoElements[vidIndex].currentTime = 0;
          },
        });
        buttons[vidIndex].style.borderBottom = "2px solid transparent";
        buttons[vidIndex].style.color = "#979797";
      }
    });
  });
});

// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const observerCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const video = entry.target.querySelector("video");
//     if (entry.isIntersecting) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   });
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// videoContainers.forEach((videoContainer) => {
//   observer.observe(videoContainer);
// });
