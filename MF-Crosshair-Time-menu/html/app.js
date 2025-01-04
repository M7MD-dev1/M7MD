const container = document.getElementById('container');
const crosshairContainer = document.getElementById('crosshair-container');

function closeUI() {
    container.classList.add('fade-out');
    setTimeout(() => {
        container.style.display = 'none';
        document.body.classList.add('hide-cursor');
        document.body.style.cursor = 'none'; 

    }, 500);
}

function showContainer() {
    container.style.display = 'flex';
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    document.body.classList.remove('hide-cursor');
    document.body.style.cursor = 'auto';
}


function showCrosshair(imagePath) {
    crosshairContainer.innerHTML = `
        <img id="crosshair" src="${imagePath}" alt="Selected Crosshair" style="display: block; margin: 0 auto;">
    `;
}

window.addEventListener('message', (event) => {
    const data = event.data;

    if (data.action === "openUI") {
        showContainer();
    } else if (data.action === "closeUI") {
        closeUI();
    }

    if (data.type === "toggleCrosshair") {
        if (data.visible) {
            showCrosshair('Crosshair/point.png');
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    }

    if (data.type === "toggleUI") {
        if (data.visible) {
            document.getElementById('container').style.display = 'flex';
        } else {
            document.getElementById('container').style.display = 'none';
        }
    }
});

document.getElementById("icons").addEventListener("click", () => {
    fetch(`https://${GetParentResourceName()}/closeUI`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    const container = document.getElementById("container");
    if (container) {
        container.style.display = "none";
    }
});



document.getElementById('crosshair-button').addEventListener('click', function() {
    var crosshairImages = document.getElementById('crosshair-images');
    var sunMoonImages = document.getElementById('sun-moon-images');
    
    if (crosshairImages.style.display === 'none' || crosshairImages.style.display === '') {
        crosshairImages.style.display = 'flex';
        sunMoonImages.style.display = 'none';
    }
});

document.getElementById('time-button').addEventListener('click', function() {
    var crosshairImages = document.getElementById('crosshair-images');
    var sunMoonImages = document.getElementById('sun-moon-images');
    
    if (sunMoonImages.style.display === 'none' || sunMoonImages.style.display === '') {
        sunMoonImages.style.display = 'flex';
        crosshairImages.style.display = 'none';
    }
});

document.getElementById("moon-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setNight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Night time set:", data);
    });
});

document.getElementById("sun-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setDay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Day time set:", data);
    });
});

document.getElementById("Rain-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setRain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Night time set:", data);
    });
});

document.getElementById("Halloween-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setHalloween', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Day time set:", data);
    });
});

document.getElementById("Snow-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setSnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Night time set:", data);
    });
});

document.getElementById("Clear-image").addEventListener("click", function() {
    fetch('https://MF-Crosshair-Time-menu/setClear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    }).then((response) => response.json()).then((data) => {
        console.log("Night time set:", data);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setDefaultCrosshair();
});


function setDefaultCrosshair() {
    const overlay = document.getElementById("crosshair-overlay");
    const crosshair = document.getElementById("active-crosshair");

    const defaultImage = "Crosshair/point.png";
    crosshair.src = defaultImage;

    overlay.style.display = "block";
}

function showCrosshair(imageSrc) {
    const overlay = document.getElementById("crosshair-overlay");
    const crosshair = document.getElementById("active-crosshair");

    crosshair.src = imageSrc;

    overlay.style.display = "block";
}

function hideCrosshair() {
    const overlay = document.getElementById("crosshair-overlay");
    overlay.style.display = "none";
}


document.getElementById('Clear-image-2').addEventListener('click', function() {
    var crosshairoverlay = document.getElementById('crosshair-overlay');
    
    crosshairoverlay.style.display = 'none';
    
});
