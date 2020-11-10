import React from 'react';
import Navbar from "./Components/Navbar"
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home'

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App