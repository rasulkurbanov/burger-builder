import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.2
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ingredients: {
        meat: 0,
        bacon: 0,
        salad: 0,
        cheese: 0,
      },
      totalPrice: 2.4
    }
  }

  addIng = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngs = {
      ...this.state.ingredients
    }
    updatedIngs[type] = updatedCount

    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({totalPrice: newPrice, ingredients: updatedIngs})
  }


  removeIng = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount - 1
    const updatedIngs = {
      ...this.state.ingredients
    }
    updatedIngs[type] = updatedCount

    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceAddition

    this.setState({totalPrice: newPrice, ingredients: updatedIngs})
  }
  
  render() {
    return (
      <>
        <div>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls add={this.addIng} remove={this.removeIng}/>
        </div>
      </>
    )
  }
}

export default BurgerBuilder