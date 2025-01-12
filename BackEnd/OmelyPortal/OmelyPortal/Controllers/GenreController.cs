using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly GenreService _genreService;
        public GenreController(GenreService genreService)
        {
            _genreService = genreService;
        }
        [HttpPost("add-genre")]
        public IActionResult AddGenre ([FromBody] NewGenreRequest request)
        {
            var result = _genreService.CreateGenre (request);
            return Ok(result);
        }
        [HttpGet("genre-data")]
        public IActionResult GetGenre ()
        {
            var result = _genreService.GetGenreData();
            return Ok(result);
        }
    }
}
