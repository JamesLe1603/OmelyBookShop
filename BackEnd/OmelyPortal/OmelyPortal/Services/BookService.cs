using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;

namespace OmelyPortal.Services
{
    public class BookService
    {
        private readonly OmelyManagementDbContext _context;
        public BookService(OmelyManagementDbContext context)
        {
            _context = context;
        }

        public List<BookDto> GetAllBook()
        {
            var books = _context.Books.Select(book => new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
                PageNumber = book.PageNumber
            }).ToList();
            return books;
        }
        public int AddBook(NewOrEditedBook request)
        {
            var newBook = new Book
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price,
                PageNumber = request.PageNumber
            };
            _context.Books.Add(newBook);
            _context.SaveChanges();
            return newBook.Id;
        }
    }
}
