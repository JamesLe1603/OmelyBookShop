using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly AuthorService _authorService;
        public AuthorController(AuthorService authorService)
        {
            _authorService = authorService;
        }
        [HttpPost("add-author")]
        public IActionResult AddAuthor([FromBody] NewAuthorRequest request)
        {
            var result = _authorService.CreateAuthor(request);
            return Ok(result);
        }
        [HttpGet("author-data")]
        public IActionResult GetAuthor()
        {
            var result = _authorService.GetAuthors();
            return Ok(result);
        }
    }
}