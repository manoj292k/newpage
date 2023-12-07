

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

