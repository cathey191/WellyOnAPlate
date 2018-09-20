// Close modal if user clicks outside of it

;(function () {
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
})()
