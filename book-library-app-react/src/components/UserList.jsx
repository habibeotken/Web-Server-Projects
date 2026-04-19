import React from "react";

function UserList({ users, books }) {
    const getRentedBookNames = (rentedBookIDs) => {
        return rentedBookIDs.map((id) => {
            const book = books.find((b) => b.bookID === id);
            return book ? book.title : "Unknown Book";
        });
    };

    return (
        <div>
            <h2>User List</h2>
            <div className="card-grid">
                {users.map((user) => (
                    <div className="card" key={user.userID}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p>
                            <strong>Rented Books:</strong>{" "}
                            {user.rentedBookIDs.length > 0
                                ? getRentedBookNames(user.rentedBookIDs).join(", ")
                                : "No rented books"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;