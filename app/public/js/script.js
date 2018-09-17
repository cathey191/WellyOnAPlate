// Close modal if user clicks outside of it

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
