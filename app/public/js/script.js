// import { log } from "util";

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

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ('withCredentials' in xhr) {
//     xhr.open(method, url, true)
//   } else if (typeof XDomainRequest != 'undefined') {
//     xhr = new XDomainRequest()
//     xhr.open(method, url)
//   } else {
//     xhr = null
//   }
//   return xhr
// }

// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1]
// }

// function makeCorsRequest() {
//   var url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Apache%20Wellington&inputtype=textquery&fields=opening_hours,geometry&key=AIzaSyDK1LL8OIe3T_SZ6WT3U3mtCSALXXD0xaQ'
//   var xhr = createCORSRequest('GET', url)
//   if (!xhr) {
//     alert('CORS not supported')
//     return
//   }
  
//   xhr.onload = function() {
//     var text = xhr.responseText
//     var title = getTitle(text)
//     console.log('Response for CORS request to ' + url + ' ' + title);
//   }
  
//   xhr.onerror = function() {
//     console.log('error');
//   }

//   xhr.send()
// }


  

