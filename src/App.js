import React from "react"
import './App.css';

import Header from "./components/Header"
import Button from './components/Button'

import ThemeContext from "./themeContext";

function App() {
  const context = React.useContext(ThemeContext)

  return (
    <div className={`container ${context}-theme`}>
      <Header />
      <Button />
    </div>
  );
}

export default App;
