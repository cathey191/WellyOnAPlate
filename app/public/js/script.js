// Close modal if user clicks outside of it

;(function () {
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }

  function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  }
})()
