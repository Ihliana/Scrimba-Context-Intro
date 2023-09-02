import React from "react"
import ThemeContext from "../themeContext"


function Button(){
    const context = React.useContext(ThemeContext)

    return(
        <main>
            <button className={`${context}-theme`}>
                Switch Theme
            </button>
        </main>
    )
}


export default Button