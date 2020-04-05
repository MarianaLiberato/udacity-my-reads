import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BooksList from './BooksList';
import Search from './Search';

class BooksApp extends Component {




    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BooksList />   
                )} />
                <Route path="/search" render={() => (
                    <Search />  
                )} />
            </div>
        )
    }
}

export default BooksApp
