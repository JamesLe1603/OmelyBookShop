using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly LanguageService _languageService;
        public LanguageController(LanguageService languageService)
        {
            _languageService = languageService;
        }
        [HttpPost("add-language")]
        public IActionResult AddLanguage([FromBody] NewLanguageRequest request)
        {
            var result = _languageService.CreateLanguage(request);
            return Ok(result);
        }
        [HttpGet("language-data")]
        public IActionResult GetLanguage()
        {
            var result = _languageService.GetLanguages();
            return Ok(result);
        }
    }
}
