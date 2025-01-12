using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using OmelyPortal.Services;
using OmelyPortal.Models.Requests;
using OmelyPortal.Data;

namespace OmelyPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryService _categoryService;
        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpPost("add-category")]
        public IActionResult AddCategory ([FromBody] NewCategoryRequest request)
        {
            var result = _categoryService.AddCategory(request);
            return Ok(result);
        }
        [HttpPut("edit-category/{id}")]
        public IActionResult EditCategory([FromBody] NewCategoryRequest request,[FromRoute] int id)
        {
            var result = _categoryService.EditCategory(request,id);
            return Ok(result);
        }
        [HttpDelete("delete-category/{id}")]
        public IActionResult DeleteCategory([FromRoute] int id)
        {
            var result = _categoryService.DeleteCategory(id);
            return Ok(result);
        }
        [HttpGet("category-data")]
        public IActionResult GetCategory()
        {
            var result = _categoryService.GetCategories();
            return Ok(result);
        }
    }
}
