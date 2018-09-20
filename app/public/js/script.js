// Close modal if user clicks outside of it

;(function () {
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
})()

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//   if(this.status == 403){
//         console.log("Forbidden, cant access information");
//         return;
//     } else if(this.status == 404){
//         console.log("ERROR, file not found");
//         return;
//     }

//     if(this.status == 200 && this.readyState == 4){
//         console.log(this);
//         var data = JSON.parse(this.response);
//         console.log(data);
//     }
// };

// xhttp.open("GET", "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Apache%20Wellington&inputtype=textquery&fields=opening_hours,geometry&key=AIzaSyDK1LL8OIe3T_SZ6WT3U3mtCSALXXD0xaQ", true);
// xhttp.send();