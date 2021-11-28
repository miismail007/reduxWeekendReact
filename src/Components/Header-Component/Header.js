import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const menu = useSelector((state)=>state.menus)
    const logo = useSelector((state)=>state.logo)
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">{logo}</a>
            <ul className="navbar-nav">
                {menu.map(menuItem =>  <li className="nav-item" key={Math.random()}>
                <a className="nav-link" href="#">{menuItem}</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Header
