import React, { Component } from 'react'
import { useState } from "react"
import './Navbar.css'
import { MenuItems } from './MenuItems'
import {GrReactjs} from 'react-icons/gr'
import { Button } from '../Button'



//define it class because I'm woring on state
class Navbar extends React.Component {
     state = { clicked: false }

     handleClick = () => {
          this.setState({ clicked: !this.state.clicked })
     }

   render() {
        return (
          <nav className="NavbarItems">
               <h1 className="navbar-logo">React <GrReactjs className="navbarlogo-react"/></h1>

               {/* menu-icon for Mobile Devices */}
               <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
               </div>

               {/* the class in the <ul></ul> is for mobile devices functionality */}
               <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                  {/* Map through all the array object inside MenuItems here */}
                   {MenuItems.map((item, index) => {
                         return (
                             <li key={index}>
                                <a className={item.cName} href={item.url}>
                                 {item.title}
                                </a>
                             </li>    
                         )
                   })}
               </ul>
               <Button>Sign up</Button>
          </nav>
        )
   }
}

export default Navbar