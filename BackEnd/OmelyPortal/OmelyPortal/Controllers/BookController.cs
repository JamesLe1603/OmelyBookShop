using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using OmelyPortal.Services;
using OmelyPortal.Models.Requests;
using Microsoft.AspNetCore.SignalR;
using OmelyPortal.Models.Hubs;
using Microsoft.EntityFrameworkCore;
using OmelyPortal.Data;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookService _bookService;
        private readonly IHubContext<InventoryHub> _hubContext;
        private readonly OmelyManagementDbContext _context;
        public BookController(BookService service,IHubContext<InventoryHub> hubContext, OmelyManagementDbContext context)
        {
            _bookService = service;
            _hubContext = hubContext;
            _context = context;
        }
        [HttpGet("book-data")]
        public ActionResult GetBooks()
        {
            var result = _bookService.GetAllBook();
            return Ok(result);
        }
        [HttpGet("book/{id}")]
        public ActionResult GetBook(int id)
        {
            var result = _bookService.GetBookById(id);
            return Ok(result);
        }
        [HttpGet("book-stock/{id}")]
        public IActionResult GetBookStock(int id) 
        {
            var result = _bookService.GetBookStock(id);
            return Ok(result);
        }
        [HttpPut("update-stock/{id}")]
        public async Task<IActionResult> UpdateStock([FromRoute]int id, [FromBody] int quantity)
        {
            var book = _context.Books.FirstOrDefault(b => b.Id == id);
            if (book == null)
            {
                return NotFound("Book not found.");
            }

            book.Stock = quantity;
            _context.SaveChanges();

            //gui thong bao real time
            await _hubContext.Clients.All.SendAsync("Stock Updated", new
            {
                BookId = book.Id,
                Stock = book.Stock
            });
            return Ok("Book update successfully");
        }
        [HttpPost("add-book")]
        public ActionResult AddBook([FromForm] NewOrEditedBook request)
        {
            var result = _bookService.AddBook(request);
            return Ok(result);
        }
        [HttpDelete("delete-book/{id}")]
        public ActionResult DeleteBook([FromRoute] int id)
        {
            var result = _bookService.DeleteBook(id);
            return Ok(result);
        }
        [HttpPut("edit-book/{id}")]
        public ActionResult EditBook([FromRoute] int id, [FromBody] NewOrEditedBook request)
        {
            var result = _bookService.EditBook(id, request);
            return Ok(result);
        }
    }
}
