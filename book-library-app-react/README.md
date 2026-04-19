# 📚 Book Library React App (HW3)

This project is developed for the **BIM308 Web Server Programming** course.

It is a frontend application built with **React**, which consumes data from JSON APIs and simulates a library system.

---

## 🚀 Features

- 📖 Display all books with:
  - Title
  - Author Name (mapped from authorID)
  - Release Year
  - Price
  - Book Cover (Open Library API)

- 👤 Display all users with:
  - Name
  - Email
  - Rented Books (mapped from book IDs)

- 🔄 Rent Book functionality:
  - Select user and book
  - Add book to user's rented list
  - Prevent duplicate rentals

- 🌐 API Consumption:
  - Data is fetched from external JSON sources using Axios

- 🧠 State Management:
  - Managed using React `useState` and `useEffect`

- 🔀 Routing:
  - `/` → Book List
  - `/users` → User List
  - `/rent` → Rent Book

- 🐳 Docker Support

---


## ⚙️ Installation & Run

### 1. Install dependencies

```bash
npm install
