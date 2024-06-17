// POSITION FIXED CHANGES BACKGROUND-COLOR ON SCROLL
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#000000";
    header.style.opacity = "75%";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// SECTION 3 VIDEO PLAYS ONCLICK
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".video-handler-container button");
  const videoContainers = document.querySelectorAll(".video-container");
  const videoElements = document.querySelectorAll("video");
  const textContainers = document.querySelectorAll(".text-container");

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
          button.style.borderBottom = "1px solid black";
          button.style.color = "black";
          // button.classList.add("active");
          gsap.to(textContainers[vidIndex], {
            opacity: 1,
            duration: 0.3,
            ease: "power1.in",
            onStart: () => {
              textContainers[vidIndex].style.display = "block";
            },
          });
        } else {
          gsap.to(videoContainer, {
            opacity: 0,
            duration: 0.1,
            ease: "power1.in",
            onComplete: () => {
              videoContainer.style.display = "none";
              videoElements[vidIndex].pause();
              videoElements[vidIndex].currentTime = 0;
            },
          });
          buttons[vidIndex].style.borderBottom = "1px solid transparent";
          buttons[vidIndex].style.color = "#979797";
          buttons[vidIndex].classList.remove("active");
          gsap.to(textContainers[vidIndex], {
            opacity: 0,
            duration: 0.3,
            ease: "power1.in",
            onComplete: () => {
              textContainers[vidIndex].style.display = "none";
            },
          });
        }
      });
    });
  });
});
// CAR COLOR SELECTION ON CLICK
document.addEventListener("DOMContentLoaded", () => {
  const rounds = document.querySelectorAll(".round");
  const vehicles = document.querySelectorAll(".vehicles-selected-content");

  rounds.forEach((round, index) => {
    round.addEventListener("click", () => {
      vehicles.forEach((vehicle, vicIndex) => {
        if (index === vicIndex) {
          vehicle.classList.add("active");
          vehicle.style.opacity = "1";
          vehicle.style.display = vehicle.style.transition = ".5s ease-in";
        } else {
          vehicle.classList.remove("active");
          vehicle.style.opacity = "0";
          vehicle.style.transition = ".5s ease-out";
        }
      });
    });
  });
});
