import './index.css';
import FirstContainer from '../first';
import SecondContainer from '../second';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class HomeContainer extends Component {
    render() {
        return (
            <div className='container'>
                对不起，亲爱的，我再也不敢了！
                <SecondContainer />
                <Switch>
                    <Route path="/first" component={FirstContainer} />
                    <Route path="/second" component={SecondContainer} />
                </Switch>
            </div>
        )
    }
}