import React from "react";

function BookList({ books, authors }) {
    const getAuthorName = (authorID) => {
        const author = authors.find((a) => a.authorID === authorID);
        return author ? author.authorName : "Unknown Author";
    };

    const getBookImage = (title) => {
        return `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
    };

    return (
        <div>
            <h2>Book List</h2>
            <div className="card-grid">
                {books.map((book) => (
                    <div className="card" key={book.bookID}>
                        <img
                            src={getBookImage(book.title)}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/150x220?text=No+Image";
                            }}
                            alt={book.title}
                        />
                        <p><strong>Title:</strong> {book.title}</p>
                        <p><strong>Author:</strong> {getAuthorName(book.authorID)}</p>
                        <p><strong>Year:</strong> {book.releaseYear}</p>
                        <p><strong>Price:</strong> {book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;