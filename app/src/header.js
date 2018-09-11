import React, { Component } from 'react';

class Header extends Component{
  constructor(props){

  }

  render(){
    return (
      <div>
        <div className="header">
          <div class="header-top">
            <form class="filter-form" action="">
              <input class="filter-list" type="radio" name="gender" value="cocktails" checked /><img class="icon" src="icons/cocktail.png" alt="" /> Cocktail
              <input class="filter-list" type="radio" name="gender" value="burgers" /><img class="icon" src="icons/hamburger-meal.png" alt="" />Burger
              <input class="filter-list" type="radio" name="gender" value="dine" /><img class="icon" src="icons/cutlery.png" alt="" /> Dine
            </form>
          </div>

          <div class="header-bottom">
					<button class="btn purple-btn" value="protein">Protein</button>


					<h3>Sort by</h3>
					<select class="sort-by">
						<option value="alphabetical">Alphabetical</option>
						<option value="price">Price</option>
					</select>
          </div>
        </div>
      </div>
    )
  }
}

export default Header