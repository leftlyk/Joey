happy = true;
var linkStr = 'octo/octo-smile.svg'; 

function displayImage() {
var img = document.getElementById('image');
var div = document.getElementById('CC');
    if (happy) {
        div.style.background = "black";
        img.src = 'octo/octo-frown.svg';
        linkStr = 'octo/octo-frown.svg';
        happy = false;
    }
    else if (!happy) {
        div.style.background = "crimson";
        img.src = 'octo/octo-smile.svg';
        linkStr = 'octo/octo-smile.svg';
        happy = true;
    }
    localStorage.setItem('link-string', linkStr);
   }

