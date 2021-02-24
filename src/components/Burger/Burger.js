import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
  let chosenIngs;
  let sumIngs = 0;

  chosenIngs = Object.entries(props.ingredients)
    .map((singleIng, index) => {
      sumIngs += singleIng[1]

      if (sumIngs > 0) {
        return [...Array(singleIng[1]).fill(singleIng[0])]
          .map(elem => {
            return <BurgerIngredient type={elem} key={index + Math.random()} />
          })
      }
        return <p key={Math.random()} style={{fontSize:"12px"}}>Please add {singleIng[0]} into burger</p>
    })

  return (
    <>
      <div className={classes.Burger}>
        <BurgerIngredient key={Math.random()} type="bread-top" />
          {chosenIngs}
        <BurgerIngredient key={Math.random()} type="bread-bottom" />
      </div>
    </>
  )
}

export default Burger