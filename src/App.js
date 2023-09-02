import React from "react"
import './App.css';

import Header from "./components/Header"
import Button from './components/Button'

import ThemeContext from "./themeContext";

function App() {
  /**
     * Challenge part 1:
     * Add state to the App component. Default value === "light". 
     * Pass that state as the value to the context provider.
     */

  const [theme, setTheme] = React.useState('light')

  /**
     * Challenge part 2:
     * Create a `toggleTheme` function to that uses `setTheme`
     * to change the value from "light" to "dark" and vice versa.
     */

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : "light")
  }

    /**
     * Challenge part 3:
     * Figure out how to pass BOTH the `theme` value and 
     * the `toggleTheme` function down through the context value
     */


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
