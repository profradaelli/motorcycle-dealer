function showDetails(bikeId) {
    var modal = document.getElementById('bike-details');
    var details = document.getElementsByClassName('details');
    
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }
    
    document.getElementById(bikeId).style.display = 'block';
    modal.style.display = 'block';
}

function closeDetails() {
    var modal = document.getElementById('bike-details');
    modal.style.display = 'none';
}

// Funzione per cambiare il colore di sfondo quando il navigatore passa sopra il box
function highlightBox(box) {
    box.style.backgroundColor = '#e0e0e0';
}

// Funzione per riportare il colore di sfondo originale quando il navigatore esce dal box
function resetBox(box) {
    box.style.backgroundColor = '#f4f4f4';
}

// Aggiungere gli event listeners per i box delle moto
document.querySelectorAll('.bike').forEach(function(box) {
    box.addEventListener('mouseenter', function() {
        highlightBox(box);
    });
    box.addEventListener('mouseleave', function() {
        resetBox(box);
    });
});