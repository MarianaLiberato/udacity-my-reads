import React, { Component } from 'react';

const Book = ( props ) => {

    //TODO replace with props -- START
    const shelves = [
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

    const book = {
        title: "To Kill a Mockingbird",
        publishedDate: "1321",
        authors:["Harper Lee", "Danny"],
        imageLinks:{thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"}
    }

    function addToShelf (value) {
        console.log(value);
    }
    
    const { imageLinks, title, authors } = book;
    const { thumbnail } = imageLinks;
    //TODO replace with props -- END

    function getCommaSeparatedAuthors (authors) {
        return authors ? authors.join(", ") : authors;
    }

    const currentShelf = shelves.filter(shelf => shelf.selected)[0];

    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
            <div className="book-shelf-changer">
                <AddToShelf 
                    shelves={shelves}
                    defaultShelf={currentShelf}
                    addToShelf={addToShelf}
                />
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{getCommaSeparatedAuthors(authors)}</div>
        </div>
    );
}

export default Book;

const AddToShelf = (props) => {

    const { shelves, selectedShelf, addToShelf } = props;

    function handleSelectShelf (event) {
        addToShelf(event.target.value);
    }

    return(
        <select value={selectedShelf} onChange={handleSelectShelf}>
            <option value="move" disabled>Move to...</option>
            {shelves.map(shelf => <option value={shelf.value} key={shelf.value}>{shelf.name}</option>)}
        </select>
    )
}