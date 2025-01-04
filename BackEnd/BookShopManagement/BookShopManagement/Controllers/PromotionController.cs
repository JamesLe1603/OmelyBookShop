using BookShopManagement.Data;
using BookShopManagement.DTOs.Requests;
using BookShopManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookShopManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PromotionController : ControllerBase
    {
        private readonly PromotionManagementService _promotionManagementService;
        private readonly BookManagementDbContext _context;
        public PromotionController(BookManagementDbContext context,PromotionManagementService promotionService) 
        {
            _context = context;
            _promotionManagementService = promotionService;
        }
        [HttpGet(Name = "GetAllPromotion")]
        public IActionResult GetPromotions()
        {
            var promotions = _promotionManagementService.GetPromotions();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(promotions);
        }
        [HttpPost]
        public IActionResult AddPromotion([FromBody] PromotionInput request)
        {
            var promotion = _promotionManagementService.Create(request);
            return Ok(promotion);
        }
        [HttpPut("{requestId}")]
        public IActionResult EditPromotion([FromBody] PromotionInput request, [FromRoute] int requestId)
        {
            var promotion = _promotionManagementService.Update(request, requestId);
            return Ok(promotion);
        }
        [HttpDelete("{requestId}")]
        public IActionResult DeletePromotion(int requestId)
        {
            var promotion = _promotionManagementService.Delete(requestId);
            return Ok(promotion);
        }
    }
}
