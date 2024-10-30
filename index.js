document.getElementById("instagram").addEventListener("click", function() {
  window.open("https://instagram.com/autoskola_krystof_brno");
});

document.getElementById("facebook").addEventListener("click", function() {
  window.open("https://www.facebook.com/p/Auto%C5%A1kola-Kry%C5%A1tof-61563449555120/");
});

document.getElementById("ucebnice").addEventListener("click", function() {
  window.open("https://www.schroter.cz/pristup/kr02jm/brno-krystof.pdf");
});

document.getElementById("testy").addEventListener("click", function() {
  window.open("https://etesty2.mdcr.cz/Home/Tests/ro");
});


let currentParagraphIndex = 0;
let totalParagraphs = document.querySelectorAll('.paragraph').length;
let interval;

function showParagraph(index) {
    clearActiveStates();
    currentParagraphIndex = index;

    document.querySelectorAll('.paragraph')[index].classList.add('active');

    document.getElementById(`btn-${index}`).classList.add('active');
}

function clearActiveStates() {

    document.querySelectorAll('.paragraph').forEach(paragraph => {
        paragraph.classList.remove('active');
    });

    document.querySelectorAll('.button-container button').forEach(button => {
        button.classList.remove('active');
    });
}

function startAutoCycle() {
    interval = setInterval(() => {
        currentParagraphIndex = (currentParagraphIndex + 1) % totalParagraphs;
        showParagraph(currentParagraphIndex);
    }, 7000);
}

document.addEventListener("DOMContentLoaded", function() {
    showParagraph(0);  
    startAutoCycle();  
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
   
    var map = L.map('map').setView([49.18117612639365,16.620124411], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([49.18117612639365,16.620124411]).addTo(map);

    marker.bindPopup("<b>Autoškola Kryštof</b><br>Komárovská 666/3, 617 00 Brno-jih-Komárov").openPopup();
  });

    // Function to open popup and disable scrolling
    function openPopup() {
      document.getElementById('popupOverlay').style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Function to close popup and enable scrolling
    function closePopup() {
      document.getElementById('popupOverlay').style.display = 'none';
      document.body.style.overflow = ''; // Enable scrolling
    }

    document.getElementById('phone').onclick = function() {
      window.location.href = 'mobilni.html'; // URL, na kterou chcete přejít
    };