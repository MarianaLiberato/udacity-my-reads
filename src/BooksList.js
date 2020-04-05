import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class BooksList extends Component {

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

    books = [
        {
            title: "To Kill a Mockingbird",
            publishedDate: "1321",
            authors:["Harper Lee", "Danny"],
            imageLinks:{thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"}
        },
        {
            title: "To Kill a Mockingbird",
            publishedDate: "1322",
            authors:["Harper Lee"],
            imageLinks:{thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"}
        }
                            
    ]

    //TODO replace with props -- END
    

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf 
                            title="Currently Reading" 
                            books={this.books}
                            shelves={this.shelves}
                            addToShelf={this.addToShelf}
                        />
                        <Bookshelf 
                            title="Want to Read" 
                            books={this.books}
                            shelves={this.shelves}
                            addToShelf={this.addToShelf}
                            />
                            <Bookshelf 
                            title="Read" 
                            books={this.books}
                            shelves={this.shelves}
                            addToShelf={this.addToShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksList;