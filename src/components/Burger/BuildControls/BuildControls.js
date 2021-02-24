import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
]



function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control, index) => {
        return
        <BuildControl
          key={index}
          label={control.label}
          type={control.type}
          add={() => props.add(control.type)}
          remove={() => props.remove(control.type)}
        />
      })}
    </div>
  )
}

export default BuildControls