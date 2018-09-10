const express = require('express')
const cors = require('cors')
const woap = require('./data/woap.json')

const app = express()

app.use(cors())

app.use(function (req, res, next) {
  console.log(`${req.method} request for ${req.url}`)
  next()
})

app.get('/allProducts', function (req, res) {
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    woapData.push(eventData(woap.venues[i]))
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
})

function eventData (woapLocations) {
  var location = []

  if (woapLocations.Event.length !== 0) {
    location.push({ address1: woapLocations.Venue.address1, suburb: woapLocations.Venue.suburb, website: woapLocations.Venue.website })
    for (var j = 0; j < woapLocations.Event.length; j++) {
      var option = []
      if (woapLocations.Event[j].platform_burger === '1') {
        option.push({ event: 'burger', title: woapLocations.Event[j].name_of_burger, price: woapLocations.Event[j].burger_price, description: woapLocations.Event[j].description_of_burger, protein: woapLocations.Event[j].what_is_the_main_protein_of_your_burger })
      }
      if (woapLocations.Event[j].platform_cocktail === '1') {
        option.push({ event: 'cocktail', title: woapLocations.Event[j].name_of_cocktail_tapas_match, price: woapLocations.Event[j].price_of_cocktail_tapas_match, description: woapLocations.Event[j].description_of_cocktail_and_regionally_inspired_tapas_match, spirit: woapLocations.Event[j].type_of_spirit })
      }
      if (woapLocations.Event[j].platform_dine === '1') {
        option.push({ event: 'dine', total_dishes: woapLocations.Event[j].how_many_additional_courses_will_you_be_serving })
      }
    }
    location.push(option)
  } else {
    return false
  }
  return location
}

function removeFalse (array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i][1] === 'object' && array[i][1].length >= 1) {
      newArray.push(array[i])
    }
    if (array.length === i + 1) {
      return newArray
    }
  }
}

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), function () {
  console.log(`Server is running on port ${app.get('port')}`)
})
