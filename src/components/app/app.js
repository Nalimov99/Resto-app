import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from '../header/header'
import MenuList from '../menu-list/menu-list'
import Cart from '../cart/cart'


import './app.scss'



export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={MenuList}/>
                    <Route path="/cart/" component={Cart}/>
                </Switch>
            </div>
        )
    }
}

