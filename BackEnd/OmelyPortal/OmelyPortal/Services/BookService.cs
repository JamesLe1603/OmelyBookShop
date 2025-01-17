using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Hubs;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;

namespace OmelyPortal.Services
{
    public class BookService
    {
        private readonly OmelyManagementDbContext _context;
        private readonly IHubContext<InventoryHub> _hubContext;
        public BookService(OmelyManagementDbContext context, IHubContext<InventoryHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        public List<BookDto> GetAllBook()
        {
            var books = _context.Books.Select(book => new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
                PageNumber = book.PageNumber,
                Genre = book.Genre,
                Image = book.Image,
                Publisher = book.Publisher,
                Language = book.Language,
                Author = book.Author,
                Stock = book.Stock
            }).ToList();
            return books;
        }
        public Book GetBookById (int id)
        {
            var book = _context.Books
                .Include(b => b.Genre)
                .Include(b => b.Author)
                .Include(b => b.Publisher)
                .Include(b => b.Language)
                .FirstOrDefault(b => b.Id == id);
            return book;
        }
        public int GetBookStock (int id)
        {
            var book = _context.Books.FirstOrDefault(b => b.Id == id);
            return book.Stock;
        }
        public int AddBook(NewOrEditedBook request)
        {
            string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }
            string profileImagePath = null;
            if (request.BookImage != null && request.BookImage.Length > 0)
            {
                string fileName = $"{Guid.NewGuid()}_{Path.GetFileName(request.BookImage.FileName)}";
                string filePath = Path.Combine(uploadPath, fileName);
                //luu file
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    request.BookImage.CopyTo(stream);
                }
                profileImagePath = $"/uploads/{fileName}";
            }
            var newBook = new Book
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price,
                PageNumber = request.PageNumber,
                Image = profileImagePath,
                GenreId = request.GenreId,
                LanguageId = request.LanguageId,
                AuthorId = request.AuthorId,
                PublisherId = request.PublisherId,
                Stock = request.Stock
            };
            _context.Books.Add(newBook);
            _context.SaveChanges();
            return newBook.Id;
        }
        public int EditBook(int id, NewOrEditedBook request)
        {
            var existingBook = _context.Books.FirstOrDefault(book => book.Id == id);
            if (existingBook == null)
            {
                throw new Exception("Book not found");
            }

            // Check if a new image is provided
            string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }
            string profileImagePath = existingBook.Image;

            if (request.BookImage != null && request.BookImage.Length > 0)
            {
                // Generate a new file name and path
                string fileName = $"{Guid.NewGuid()}_{Path.GetFileName(request.BookImage.FileName)}";
                string filePath = Path.Combine(uploadPath, fileName);

                // Save the new image
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    request.BookImage.CopyTo(stream);
                }
                profileImagePath = $"/uploads/{fileName}";
            }

            // Update book properties
            existingBook.Title = request.Title;
            existingBook.Description = request.Description;
            existingBook.Price = request.Price;
            existingBook.PageNumber = request.PageNumber;
            existingBook.Image = profileImagePath;
            existingBook.GenreId = request.GenreId;
            existingBook.LanguageId = request.LanguageId;
            existingBook.AuthorId = request.AuthorId;
            existingBook.PublisherId = request.PublisherId;
            existingBook.Stock = request.Stock;

            _context.Books.Update(existingBook);
            _context.SaveChanges();

            return existingBook.Id;
        }
        public int DeleteBook(int id)
        {
            var deletedBook = _context.Books.FirstOrDefault(x => x.Id == id);
            if (deletedBook == null)
            {
                throw new Exception("Book not existed!");
            }
            _context.Books.Remove(deletedBook);
            _context.SaveChanges();
            return deletedBook.Id;
        }
    }
}
