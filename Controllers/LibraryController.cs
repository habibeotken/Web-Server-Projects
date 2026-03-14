using Microsoft.AspNetCore.Mvc;
using BookLibrary.Models;

namespace BookLibrary.Controllers
{
    public class LibraryController : Controller
    {
        public IActionResult Index()
        {
            List<Book> books = new List<Book>
{
    new Book
    {
        BookID = 1,
        Title = "The Midnight Library",
        Director = "Matt Haig",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 2020,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
        Price = 17.99
    },
    new Book
    {
        BookID = 2,
        Title = "Project Hail Mary",
        Director = "Andy Weir",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 2021,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg",
        Price = 18.99
    },
    new Book
    {
        BookID = 3,
        Title = "1984",
        Director = "George Orwell",
        Stars = new string[] {"⭐","⭐","⭐","⭐"},
        ReleaseYear = 1949,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        Price = 12.50
    },
    new Book
    {
        BookID = 4,
        Title = "Harry Potter",
        Director = "J.K. Rowling",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 1997,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg",
        Price = 21.99
    },
    new Book
    {
        BookID = 5,
        Title = "The Hobbit",
        Director = "J.R.R. Tolkien",
        Stars = new string[] {"⭐","⭐","⭐","⭐"},
        ReleaseYear = 1937,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        Price = 15.75
    },
    new Book
    {
        BookID = 6,
        Title = "Masumiyet Müzesi",
        Director = "Orhan Pamuk",
        Stars = new string[] {"⭐","⭐","⭐","⭐"},
        ReleaseYear = 2008,
        ImageUrl = "https://upload.wikimedia.org/wikipedia/tr/thumb/a/a9/Masumiyet_M%C3%BCzesi_kapak.jpg/500px-Masumiyet_M%C3%BCzesi_kapak.jpg",
        Price = 16.50
    },
    new Book
    {
        BookID = 7,
        Title = "The Notre Dame Cathedral",
        Director = "Victor Hugo",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 1831,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780140443530-L.jpg",
        Price = 14.90
    },
    new Book
    {
        BookID = 8,
        Title = "Hamlet",
        Director = "William Shakespeare",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 1603,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780743477123-L.jpg",
        Price = 19.75
    },
    new Book
    {
        BookID = 9,
        Title = "Crime and Punishment",
        Director = "Fyodor Dostoyevsky",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 1866,
        ImageUrl = "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg",
        Price = 13.25
    },
    new Book
    {
        BookID = 10,
        Title = "Puslu Kıtalar Atlası",
        Director = "İhsan Oktay Anar",
        Stars = new string[] {"⭐","⭐","⭐","⭐"},
        ReleaseYear = 1995,
        ImageUrl = "https://upload.wikimedia.org/wikipedia/tr/a/ad/%C4%B0hsan_Oktay_Anar_-_Puslu_K%C4%B1talar_Atlas%C4%B1.jpg",
        Price = 15.80
    },
    new Book
    {
        BookID = 11,
        Title = "Anayurt Oteli",
        Director = "Yusuf Atılgan",
        Stars = new string[] {"⭐","⭐","⭐","⭐"},
        ReleaseYear = 1973,
        ImageUrl = "https://cdn.canyayinlari.com/productimages/121947/big/9789750765254_front_cover1.jpg",
        Price = 12.90
    },
    new Book
    {
        BookID = 12,
        Title = "Saatleri Ayarlama Enstitüsü",
        Director = "Ahmet Hamdi Tanpınar",
        Stars = new string[] {"⭐","⭐","⭐","⭐","⭐"},
        ReleaseYear = 1961,
        ImageUrl = "https://upload.wikimedia.org/wikipedia/tr/5/52/Saatleri_Ayarlama_Enstit%C3%BCs%C3%BC.jpg",
        Price = 17.40
    }
};
            var sortedBooks = books.OrderByDescending(b => b.Stars.Length).ToList();

            return View(sortedBooks);
            
        }
    }
}