using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using OmelyPortal.Services;
using OmelyPortal.Models.Requests;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookService _bookService;
        public BookController(BookService service)
        {
            _bookService = service;
        }
        [HttpGet("book-data")]
        public ActionResult GetBooks()
        {
            var result = _bookService.GetAllBook();
            return Ok(result);
        }
        [HttpPost("add-book")]  
        public ActionResult AddBook([FromForm] NewOrEditedBook request)
        {
            var result = _bookService.AddBook(request);
            return Ok(result);
        }
    }
}
