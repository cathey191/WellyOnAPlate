const express = require('express')
const cors = require('cors')
const https = require('https')
const woap = require('./data/woap.json')
const config = require('./config.json')

const app = express()
const key = config[0].API_KEY


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
  getPlaceId(woapData)
  
})

app.get('/dine', function (req, res) {
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    woapData.push(getDine(woap.venues[i]))
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
  getPlaceId(woapData)
})

app.get('/burger', function (req, res) {
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    woapData.push(getBurger(woap.venues[i]))
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
  getPlaceId(woapData)
})

app.get('/cocktail', function (req, res) {
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    woapData.push(getCocktail(woap.venues[i]))
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
  getPlaceId(woapData)
})

app.get('/dine/type:type', function (req, res) {
  var type = req.params.type.substring(1)
  if (type === 'Festival') {
    type = 'Festival Dish'
  }
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    for (var j = 0; j < woap.venues[i].Event.length; j++) {
      if (woap.venues[i].Event[j].course1_option1_type === type) {
        woapData.push(getDine(woap.venues[i]))
        break
      } else if (woap.venues[i].Event[j].course2_option1_type === type) {
        woapData.push(getDine(woap.venues[i]))
        break
      } else if (woap.venues[i].Event[j].course3_option1_type === type) {
        woapData.push(getDine(woap.venues[i]))
        break
      }
    }
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
})

app.get('/burger/type:type', function (req, res) {
  var type = req.params.type.substring(1)
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    for (var j = 0; j < woap.venues[i].Event.length; j++) {
      if (
        woap.venues[i].Event[j].what_is_the_main_protein_of_your_burger === type
      ) {
        woapData.push(getBurger(woap.venues[i]))
        break
      }
    }
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
})

app.get('/cocktail/type:type', function (req, res) {
  var type = req.params.type.substring(1)
  var woapData = []
  for (var i = 0; i < woap.venues.length; i++) {
    for (var j = 0; j < woap.venues[i].Event.length; j++) {
      if (woap.venues[i].Event[j].type_of_spirit === type) {
        woapData.push(getCocktail(woap.venues[i]))
        break
      }
    }
    if (woap.venues.length === i + 1) {
      res.json(removeFalse(woapData))
    }
  }
})

function eventData (woapLocations) {
  var location = []
  if (woapLocations.Event.length !== 0) {
    location.push({
      company: woapLocations.Venue.title,
      address1: woapLocations.Venue.address1,
      suburb: woapLocations.Venue.suburb,
      website: woapLocations.Venue.website
    })
    for (var j = 0; j < woapLocations.Event.length; j++) {
      var option = []
      if (woapLocations.Event[j].platform_burger === '1') {
        option.push({
          event: 'burger',
          title: woapLocations.Event[j].name_of_burger,
          price: removeSymbol(woapLocations.Event[j].burger_price),
          description: woapLocations.Event[j].description_of_burger,
          protein: woapLocations.Event[j]
            .what_is_the_main_protein_of_your_burger
        })
      }
      if (woapLocations.Event[j].platform_cocktail === '1') {
        option.push({
          event: 'cocktail',
          title: woapLocations.Event[j].name_of_cocktail_tapas_match,
          price: removeSymbol(
            woapLocations.Event[j].price_of_cocktail_tapas_match
          ),
          description: woapLocations.Event[j]
            .description_of_cocktail_and_regionally_inspired_tapas_match,
          spirit: woapLocations.Event[j].type_of_spirit
        })
      }
      if (
        woapLocations.Event[j].platform_dine === '1' &&
        woapLocations.Event[j].how_many_additional_courses_will_you_be_serving
          .length === 1
      ) {
        option.push({
          event: 'dine',
          total_dishes: woapLocations.Event[j]
            .how_many_additional_courses_will_you_be_serving,
          price: removeSymbol(woapLocations.Event[j].price_of_set_menu),
          dishes: dineData(woapLocations.Event[j])
        })
      }
    }
    location.push(option)
  } else {
    return false
  }
  return location
}

function getDine (woapLocations) {
  var location = []
  if (woapLocations.Event.length !== 0) {
    location.push({
      company: woapLocations.Venue.title,
      address1: woapLocations.Venue.address1,
      suburb: woapLocations.Venue.suburb,
      website: woapLocations.Venue.website
    })
    for (var j = 0; j < woapLocations.Event.length; j++) {
      var option = []
      if (
        woapLocations.Event[j].platform_dine === '1' &&
        woapLocations.Event[j].how_many_additional_courses_will_you_be_serving
          .length === 1
      ) {
        option.push({
          event: 'dine',
          total_dishes: woapLocations.Event[j]
            .how_many_additional_courses_will_you_be_serving,
          price: removeSymbol(woapLocations.Event[j].price_of_set_menu),
          dishes: dineData(woapLocations.Event[j])
        })
      }
    }
    location.push(option)
  } else {
    return false
  }
  return location
}

function getBurger (woapLocations) {
  var location = []
  if (woapLocations.Event.length !== 0) {
    location.push({
      company: woapLocations.Venue.title,
      address1: woapLocations.Venue.address1,
      suburb: woapLocations.Venue.suburb,
      website: woapLocations.Venue.website
    })
    for (var j = 0; j < woapLocations.Event.length; j++) {
      var option = []
      if (woapLocations.Event[j].platform_burger === '1') {
        option.push({
          event: 'burger',
          title: woapLocations.Event[j].name_of_burger,
          price: removeSymbol(woapLocations.Event[j].burger_price),
          description: woapLocations.Event[j].description_of_burger,
          protein: woapLocations.Event[j]
            .what_is_the_main_protein_of_your_burger
        })
      }
    }
    location.push(option)
  } else {
    return false
  }
  return location
}

function getCocktail (woapLocations) {
  var location = []
  if (woapLocations.Event.length !== 0) {
    location.push({
      company: woapLocations.Venue.title,
      address1: woapLocations.Venue.address1,
      suburb: woapLocations.Venue.suburb,
      website: woapLocations.Venue.website
    })
    for (var j = 0; j < woapLocations.Event.length; j++) {
      var option = []
      if (woapLocations.Event[j].platform_cocktail === '1') {
        option.push({
          event: 'cocktail',
          title: woapLocations.Event[j].name_of_cocktail_tapas_match,
          price: removeSymbol(
            woapLocations.Event[j].price_of_cocktail_tapas_match
          ),
          description: woapLocations.Event[j]
            .description_of_cocktail_and_regionally_inspired_tapas_match,
          spirit: woapLocations.Event[j].type_of_spirit
        })
      }
    }
    location.push(option)
  } else {
    return false
  }
  return location
}

function dineData (data) {
  var dine = []
  if (data.how_many_additional_courses_will_you_be_serving === '2') {
    dine.push({
      course1_type: data.course1_option1_type,
      course1: data.course1_option1
    })
    dine.push({
      course2_type: data.course2_option1_type,
      course2: data.course2_option1
    })
  }
  if (data.how_many_additional_courses_will_you_be_serving === '3') {
    dine.push({
      course1_type: data.course1_option1_type,
      course1: data.course1_option1
    })
    dine.push({
      course2_type: data.course2_option1_type,
      course2: data.course2_option1
    })
    dine.push({
      course3_type: data.course3_option1_type,
      course3: data.course3_option1
    })
  }
  return dine
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

function removeSymbol (item) {
  while (item.charAt(0) === '$') {
    item = item.substr(1)
  }
  return item
}

// DANTON
function getPlaceId (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {
    }
  }
  var arrayWithId = []

  for (let i = 0; i < 5; i++) {
    if (array[i] === false) {

    } else {
      var el = array[i][0].company

      el = el.split('&').join('and')
      el = el.split('é').join('e')
      el = el.split('è').join('e')
      el = el.split('ā').join('a')
      el = el.split('ō').join('o')
      el = el.split('ï').join('i')
      el = el.split('ü').join('u')
      var spaceName = el.split(' ').join('%20')
      let body = ''

      https.get(
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' +
          spaceName +
          '%20wellington,%20New%20Zealand&inputtype=textquery&key=' +
          key,
        function (res) {
          res.on('data', function (chunk) {
            
            var chunkInfo = chunk.toString()
            var chunkInfoJson = JSON.parse(chunkInfo)
            if (chunkInfoJson.candidates[0] === undefined) {
            }
            var obj = {id: chunkInfoJson.candidates[0].place_id};
            array[i].push(obj)
            console.log(array[i]);
            
            arrayWithId.push(array[i])
            return(arrayWithId[i])
          })
          res.on('end', () => {
            
          })
        }
      )
    } // if else end
  } // for loop end
  
  console.log(arrayWithId);
  
  // https.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5dJAayuuOG0RODN2aHAHYok&fields=name,opening_hours&key=' + key, function (res){
  //   res.on('data', function (chunk){
  //     console.log(chunk.toString());
  //   })
  // })

} // *** GETPLACE ID END ***

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), function () {
  console.log(`Server is running on port ${app.get('port')}`)
})
