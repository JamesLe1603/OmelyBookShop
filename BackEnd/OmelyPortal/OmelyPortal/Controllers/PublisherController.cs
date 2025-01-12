using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        private readonly PublisherService _publisherService;
        public PublisherController(PublisherService publisherService)
        {
            _publisherService = publisherService;
        }
        [HttpPost("add-publisher")]
        public IActionResult AddPublisher([FromBody] NewPublisherRequest request)
        {
            var result = _publisherService.CreatePublisher(request);
            return Ok(result);
        }
    }
}
