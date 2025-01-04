using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Index() 
        {
            return Ok("Welcome Admin");
        }
    }
}
