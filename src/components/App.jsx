import { StrictMode, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Home from "./Home/Home"
import Navigation from './Navigation/Navigation'

function App() {


  return (
    <>
    <StrictMode>
    <Navigation/>
    <Home/>
    </StrictMode>

    </>
  )
}

export default App
