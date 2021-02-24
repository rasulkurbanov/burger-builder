import React from 'react'
import classes from './Layout.css'

function Layout(props) {
  return (
    <div>
      <h3>Toolbar, Burger-builder, Cost</h3>
      <main className={classes.Content}>{props.children}</main>

    </div>
  )
}

export default Layout