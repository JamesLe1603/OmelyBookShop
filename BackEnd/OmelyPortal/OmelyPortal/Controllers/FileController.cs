using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OmelyPortal.Data;
using OmelyPortal.Models.Requests;
using OmelyPortal.Services;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly FileService _fileService;
        public FileController(FileService fileService) 
        {
            _fileService = fileService;
        }
        [HttpPost("upload-file")]
        public IActionResult UploadFile([FromForm] NewFileExRequest file)
        {
            var result = _fileService.UploadFile(file);
            return Ok(result);
        }
    }
}
