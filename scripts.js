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