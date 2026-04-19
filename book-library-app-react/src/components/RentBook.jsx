import React, { useState } from "react";

function RentBook({ users, books, rentBook }) {
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedBook, setSelectedBook] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedUser || !selectedBook) {
            setMessage("Please select a user and a book.");
            return;

        } const user = users.find(
            (u) => u.userID === Number(selectedUser)
        );

        if (user.rentedBookIDs.includes(Number(selectedBook))) {
            setMessage("This book is already rented by this user.");
            return;
        }
            rentBook(selectedUser, selectedBook);
            setMessage("Book rented successfully!");

            setSelectedUser("");
            setSelectedBook("");
        
    };

    return (
        <div>
            <h2>Rent Book</h2>

            <form onSubmit={handleSubmit} className="rent-form">
                <div>
                    <label>User: </label>
                    <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                    >
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option key={user.userID} value={user.userID}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>

                <br />

                <div>
                    <label>Book: </label>
                    <select
                        value={selectedBook}
                        onChange={(e) => setSelectedBook(e.target.value)}
                    >
                        <option value="">Select Book</option>
                        {books.map((book) => (
                            <option key={book.bookID} value={book.bookID}>
                                {book.title}
                            </option>
                        ))}
                    </select>
                </div>

                <br />

                <button type="submit">Rent Book</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default RentBook;