import React, { Component } from 'react'
import Book from './Book.js'

//TODO add prop types
class Bookshelf extends Component {

    render() {
        const { title, books, shelves, addToShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.title.concat(book.publishedDate)}>
                                <Book 
                                    title={book.title}
                                    authors={book.authors}
                                    imageLinks={book.imageLinks}
                                    shelves={shelves}
                                    addToShelf={addToShelf}
                                />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    };
}

export default Bookshelf;