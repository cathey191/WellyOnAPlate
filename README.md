# WellyOnAPlate

# Node Server

Setup server
```sh
$ cd server
$ npm install
```
Start server
```sh
$ nodemon -L index
```

The server will be run on port 5000

## All Data

| Option | Tag |
| ------ | ------ |
| All Products | \allProducts |
| Burger | \burger |
| Cocktail | \cocktail |
| Dine | \dine |

## Filter Data

| Burger | Tag |
| ------ | ------ |
| All Products | \burger |
| Beef | \burger\type:Beef |
| Chicken | \burger\type:Chicken |
| Pork | \burger\type:Pork |
| Vegetarian | \burger\type:Vegetarian |
| Venison | \burger\type:Venison |
| Other | \burger\type:Other |
--
| Cocktail | Tag |
| ------ | ------ |
| All Products | \cocktail |
| Gin | \cocktail\type:Gin |
| Liqueur | \cocktail\type:Liqueur |
| Rum | \cocktail\type:Rum |
| Tequila | \cocktail\type:Tequila |
| Vodka | \cocktail\type:Vodka |
| Whiskey | \cocktail\type:Whiskey |
| Wine | \cocktail\type:Wine |

--
| Dine | Tag |
| ------ | ------ |
| All Products | \dine |
| Entree | \dine\type:Entree |
| Starter | \dine\type:Starter |
| Festival Dish | \dine\type:Festival |
| Dessert | \dine\type:Dessert |
