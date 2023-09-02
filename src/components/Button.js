import React from "react"
import ThemeContext from "../themeContext"


function Button(){
    const {theme, toggleTheme} = React.useContext(ThemeContext)

    return(
        <main>
            <button onClick={toggleTheme} className={`${theme}-theme`}>
                Switch Theme
            </button>
        </main>
    )
}


export default Button