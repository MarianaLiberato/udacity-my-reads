import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

//TODO add prop types
class Search extends Component {

    //TODO replace with props -- START

    shelves = [
        {
            name: "Currently Reading",
            value: "currentlyReading",
            selected: false
        },
        {
            name: "Want to Read",
            value: "wantToRead",
            selected: false
        },
        {
            name: "Read",
            value: "read",
            selected: false
        },
        {
            name: "None",
            value: "none",
            selected: true
        },
    ];

    addToShelf (value) {
        console.log(value);
    }

    //TODO replace with props -- END

    state = {
        userHasSearched: false,
        results: []
    }

    // debounce calls to api to avoid performance issues
    debounce(callback) {
        let timeoutId;
        // bind the callback function to the component to make setState possible
        callback = callback.bind(this);

        return function() {
          // call the callback function with all the passed arguments
          const callbackWithArgs = () => callback(...arguments);

          clearTimeout(timeoutId)
          timeoutId = setTimeout(callbackWithArgs, 500)
        }
    }

    handleSearch (query) {
        BooksAPI.search(query, 10).then((results) => {
            this.setState({
                // set results as an empty array if no books are found
                results: results.length ? results : [],
                userHasSearched: true
            })
        });
    }  

    debouncedHandleSearch = this.debounce(this.handleSearch)

    render() {
        const { results, userHasSearched } = this.state;

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <SearchBar handleSearch={this.debouncedHandleSearch}/>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {results.length ? results.map((book) => (
                        <li key={book.title.concat(book.publishedDate)}>
                            <Book 
                                title={book.title}
                                authors={book.authors}
                                imageLinks={book.imageLinks}
                                shelves={this.shelves}
                                addToShelf={this.addToShelf}
                            />
                        </li>
                    )) : (
                        <p>{userHasSearched ? "Sorry, we couldn't find any book" : "Use the box above to search"}</p>
                    )}
                </ol>
            </div>
          </div>
        )
    }
  }
  
  export default Search

  class SearchBar extends Component {
    state = {
        query: ""
    }

    handleChange = (event) => {
        const { handleSearch } = this.props;
        const query = event.target.value;

        this.setState({query: query})
        handleSearch && handleSearch(query);
    }

    render(){
        return(
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author"/>
            </div>
        )
    }
  }