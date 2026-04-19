import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import BookList from "./components/BookList";
import UserList from "./components/UserList";
import RentBook from "./components/RentBook";

function App() {
    const [authors, setAuthors] = useState([]);
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authorsRes = await axios.get(
                    "https://raw.githubusercontent.com/emindk/JSON_Files/refs/heads/main/authors.json"
                );
                const booksRes = await axios.get(
                    "https://raw.githubusercontent.com/emindk/JSON_Files/refs/heads/main/books.json"
                );
                const usersRes = await axios.get(
                    "https://raw.githubusercontent.com/emindk/JSON_Files/refs/heads/main/users.json"
                );

                setAuthors(authorsRes.data);
                setBooks(booksRes.data);
                setUsers(usersRes.data);
            } catch (error) {
                console.error("Hata:", error);
            }
        };

        fetchData();
    }, []);

    const rentBook = (userID, bookID) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => {
                if (user.userID === Number(userID)) {
                    if (!user.rentedBookIDs.includes(Number(bookID))) {
                        return {
                            ...user,
                            rentedBookIDs: [...user.rentedBookIDs, Number(bookID)],
                        };
                    }
                }
                return user;
            })
        );
    };

    return (
        <Router>
            <div className="container">
                <h1>Book Library App</h1>

                <nav>
                    <Link to="/">Books</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/rent">Rent Book</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<BookList books={books} authors={authors} />} />
                    <Route path="/users" element={<UserList users={users} books={books} />} />
                    <Route
                        path="/rent"
                        element={<RentBook users={users} books={books} rentBook={rentBook} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;