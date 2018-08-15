import React, { Component } from 'react';
import './index.css';

export default class FirstContainer extends Component {
    render() {
        return (
            <div className='styFrame'>
                <img src={require('../../asset/img/first.jpeg')} alt=""/>
            </div>
        );
    }
}