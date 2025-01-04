using BookShopManagement.Data;
using BookShopManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookShopManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PurchaseOrderController : ControllerBase
    {
        private readonly PurchaseOrderManagementService service;
        private readonly BookManagementDbContext context;
        public PurchaseOrderController (PurchaseOrderManagementService _purchaseOrderManagementService, BookManagementDbContext ctx)
        {
            context = ctx;
            service = _purchaseOrderManagementService;
        }
        [HttpGet]
        public IActionResult GetPurchaseOrders()
        {
            var data = service.GetPurchaseOrders();
            return Ok(data);
        }
    }
}
