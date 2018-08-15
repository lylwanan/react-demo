import React from 'react';
import ReactDOM from 'react-dom';
import '../src/asset/style/public.css';
import HomeContainer from './container/home';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Redirect from="/" exact to="/first" />
            <Route path="/:index" component={HomeContainer} />
        </Switch>
    </BrowserRouter>,
document.getElementById('app'));