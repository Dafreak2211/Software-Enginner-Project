let bannerStatus = 1;
let bannerTimer = 3000;
let slide1 = document.getElementById("imgban1");
let slide2 = document.getElementById("imgban2");
let slide3 = document.getElementById("imgban3");

document.addEventListener("DOMContentLoaded", event => {
  let startBannerLoop = setInterval(() => {
    bannerLoopNext();
  }, bannerTimer);

  document.getElementById("main-carousel").onmouseenter = () => {
    clearInterval(startBannerLoop);
  };
  document.getElementById("main-carousel").onmouseleave = () => {
    startBannerLoop = setInterval(() => {
      bannerLoopNext();
    }, bannerTimer);
  };

  startSlide();
  document.getElementById("imgbanbtn-prev").onclick = () => {
    bannerLoopPrev();
  };
  document.getElementById("imgbanbtn-next").onclick = () => {
    bannerLoopNext();
  };

  function bannerLoopNext() {
    if (bannerStatus === 1) {
      slide3.style.opacity = "0";
      setTimeout(() => {
        slide2.style.right = "0px";
        slide2.style.zIndex = "1000";
        slide3.style.right = "-100%";
        slide3.style.zIndex = "1500";
        slide1.style.right = "100%";
        slide1.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide3.style.opacity = "1";
      }, 1000);
      bannerStatus = 2;
    } else if (bannerStatus === 2) {
      slide1.style.opacity = "0";
      setTimeout(() => {
        slide3.style.right = "0px";
        slide3.style.zIndex = "1000";
        slide1.style.right = "-100%";
        slide1.style.zIndex = "1500";
        slide2.style.right = "100%";
        slide2.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide1.style.opacity = "1";
      }, 1000);
      bannerStatus = 3;
    } else if (bannerStatus === 3) {
      slide2.style.opacity = "0";
      setTimeout(() => {
        slide1.style.right = "0px";
        slide1.style.zIndex = "1000";
        slide2.style.right = "-100%";
        slide2.style.zIndex = "1500";
        slide3.style.right = "100%";
        slide3.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide2.style.opacity = "1";
      }, 1000);
      bannerStatus = 1;
    }
  }
  // -----------------------------------------------------------------------

  function bannerLoopPrev() {
    if (bannerStatus === 1) {
      slide2.style.opacity = "0";
      setTimeout(() => {
        slide3.style.right = "0px";
        slide3.style.zIndex = "1000";
        slide1.style.right = "-100%";
        slide1.style.zIndex = "1500";
        slide2.style.right = "100%";
        slide2.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide2.style.opacity = "1";
      }, 1000);
      bannerStatus = 3;
    } else if (bannerStatus === 2) {
      slide3.style.opacity = "0";
      setTimeout(() => {
        slide1.style.right = "0px";
        slide1.style.zIndex = "1000";
        slide2.style.right = "-100%";
        slide2.style.zIndex = "1500";
        slide3.style.right = "100%";
        slide3.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide3.style.opacity = "1";
      }, 1000);
      bannerStatus = 1;
    } else if (bannerStatus === 3) {
      slide1.style.opacity = "0";
      setTimeout(() => {
        slide2.style.right = "0px";
        slide2.style.zIndex = "1000";
        slide3.style.right = "-100%";
        slide3.style.zIndex = "1500";
        slide1.style.right = "100%";
        slide1.style.zIndex = "500";
      }, 500);

      setTimeout(() => {
        slide1.style.opacity = "1";
      }, 1000);
      bannerStatus = 2;
    }
  }

  function startSlide() {
    slide2.style.opacity = "0";
    setTimeout(() => {
      slide1.style.right = "0px";
      slide1.style.zIndex = "1000";
      slide2.style.right = "-100%";
      slide2.style.zIndex = "1500";
      slide3.style.right = "100%";
      slide3.style.zIndex = "500";
    }, 500);

    setTimeout(() => {
      slide2.style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
});

window.addEventListener("scroll", function() {
  let height = window.pageYOffset;
  let navbar = document.querySelector(".navbar");
  let logo = document.querySelector(".logo img");

  if (height >= 200) {
    navbar.classList.add("xxg");
    logo.setAttribute("style", "height: 50px");
  } else {
    navbar.classList.remove("xxg");
    logo.setAttribute("style", "height: 60px");
  }
});
