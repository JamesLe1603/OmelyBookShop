using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewService _reviewService;
        public ReviewController ( ReviewService reviewService)
        {
            _reviewService = reviewService;
        }
        [HttpGet("book-review/{id}")]
        public async Task<IActionResult> GetReviewsByProduct([FromRoute] int id)
        {
            var result = await _reviewService.GetAllReviewsByProduct(id);
            return Ok(result);
        }
        [HttpPost("add-review")]
        public async Task<IActionResult> AddReview([FromBody] NewReviewRequest request)
        {
            var result = await _reviewService.AddProductReview(request);
            return Ok(result);
        }
        [HttpDelete("delete-review/{id}")]
        public async Task<IActionResult> DeleteReview([FromRoute] int id)
        {
            var result = await _reviewService.DeleteProductReview(id);
            return Ok(result);
        }
    }
}
