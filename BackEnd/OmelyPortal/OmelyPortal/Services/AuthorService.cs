using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;

namespace OmelyPortal.Services
{
    public class AuthorService
    {
        private readonly OmelyManagementDbContext _context;
        public AuthorService(OmelyManagementDbContext context)
        {
            _context = context;
        }

        public int CreateAuthor(NewAuthorRequest request)
        {
            var newAuthor = new Author
            {
                Name = request.AuthorName
            };
            _context.Authors.Add(newAuthor);
            _context.SaveChanges();
            return newAuthor.Id;
        }

        public List<AuthorDto> GetAuthors() 
        {
            var authors = _context.Authors.Select(x=> new AuthorDto
            {
                Id = x.Id,
                Name = x.Name,
            }).ToList();
            return authors;
        }
    }
}
