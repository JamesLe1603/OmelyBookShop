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
            string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }
            string profileImagePath = null;
            if(request.BookImage != null && request.BookImage.Length > 0)
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
                PublisherId = request.PublisherId
            };
            _context.Books.Add(newBook);
            _context.SaveChanges();
            return newBook.Id;
        }
      
    }
}
