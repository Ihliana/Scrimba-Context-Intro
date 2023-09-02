import React from 'react'

import ThemeContext from '../themeContext'

function Header(){

    const context = React.useContext(ThemeContext)

    return (
    
        <header className={`${context}-theme`}>
            <h1>{context === "light" ? "Light" : "Dark"} Theme</h1>
        </header>
    )
}

export default Header