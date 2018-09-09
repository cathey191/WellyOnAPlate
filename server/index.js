const express = require('express')
const cors = require('cors')
const woap = require('./data/woap.json')

const app = express()

app.use(cors())

app.use(function (req, res, next) {
  console.log(`${req.method} request for ${req.url}`)
  next()
})

app.get(('/allProducts'), function (req, res) {
  // console.log(woap.venues[5].Event)
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    var location = []
    if (woap.venues[i].Event.length !== 0) {
      location.push({address1: woap.venues[i].Venue.address1})
      location.push({suburb: woap.venues[i].Venue.suburb})
      location.push({website: woap.venues[i].Venue.website})
      woapData.push(location)
      // for (var j = 0; j < woap.venues[i].Event.length; j++) {
      //   console.log(woap.venues[i].Event[1])
      // }
      console.log(woap.venues[i].Event[1])
    }
    if (woap.venues.length === i + 1) {
      // console.log(woapData)
    }
  }

  // console.log(woap)
  res.json(woap)
})

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function () {
  console.log(`Server is running on port ${app.get('port')}`)
})
