import React from 'react';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Pricing from './Pages/Pricing'

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/pricing">
                    <Pricing />
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App