using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;

namespace OmelyPortal.Services
{
    public class GenreService
    {
        private readonly OmelyManagementDbContext _context;
        public GenreService(OmelyManagementDbContext context)
        {
            _context = context;
        }
        public int CreateGenre (NewGenreRequest request)
        {
            var newGenre = new Genre
            {
                Name = request.GenreName,
                CategoryId = request.CategoryId
            };
            _context.Genres.Add(newGenre);
            _context.SaveChanges();
            return newGenre.Id;
        }
        public List<GenreDto> GetGenreData ()
        {
            var genres = _context.Genres.Select(genre => new GenreDto
            {
                Id = genre.Id,
                Name = genre.Name,
                CategoryId = genre.CategoryId
            }).ToList();
            return genres;
        }
    }
}
