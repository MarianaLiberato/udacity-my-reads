import React from 'react';

//TODO add prop types
const Book = ( props ) => {
    
    const { imageLinks, title, authors, shelves, addToShelf } = props;
    const { thumbnail } = imageLinks;

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