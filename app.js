var darkBtn = document.getElementById('btn-2');
var lightBtn = document.getElementById('btn-1');
var container = document.getElementById('container');
var nav = document.getElementById('nav');

function goDarkMode() {
    darkBtn.addEventListener('click', function() {
        container.style.backgroundColor = "black";
        container.style.color = "white";
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        nav.classList.add('bg-dark', 'text-light'); // Apply dark mode styles to nav
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'inline';
    });
}

function goLightMode() {
    lightBtn.addEventListener('click', function() {
        container.style.backgroundColor = "white";
        container.style.color = "black";
        nav.classList.add('bg-light', 'text-dark');
        nav.classList.remove('bg-dark', 'text-light'); // Remove dark mode styles from nav
        darkBtn.style.display = 'inline';
        lightBtn.style.display = 'none';
    });
}

goDarkMode();
goLightMode();