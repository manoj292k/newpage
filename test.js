

    function openmenu() {
        
    var menubar = document.getElementById('Menubar');
    var nav = document.getElementById('navigation');
        if (menubar && nav) {
            menubar.style.display = "none";
            nav.style.display = "flex";
            console.log("Menu opened");
        } else {
            console.error("menubar or navigation element not found");
        }
    }

    function closebtn() {
        
    var menubar = document.getElementById('Menubar');
    var nav = document.getElementById('navigation');
        if (nav && menubar) {
            nav.style.display = "none";
            menubar.style.display = "inline";
            console.log("Menu closed");
        } else {
            console.error("menubar or navigation element not found");
        }
    }

    // JavaScript for fade-in animation
document.addEventListener("DOMContentLoaded", function () {
    var fadeElements = document.querySelectorAll(".fade-in");
  
    function checkFade() {
      fadeElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("fade-in-visible");
        }
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Initial check on page load
    checkFade();
  
    // Check on scroll
    window.addEventListener("scroll", checkFade);
  });
  

