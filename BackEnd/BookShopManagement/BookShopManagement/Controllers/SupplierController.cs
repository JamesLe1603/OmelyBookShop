using BookShopManagement.Data;
using BookShopManagement.DTOs.Requests;
using BookShopManagement.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookShopManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupplierController : ControllerBase
    {
        private readonly SupplierManagementService service;
        private readonly BookManagementDbContext _context;
        public SupplierController(BookManagementDbContext context, SupplierManagementService _supplierManagementService)
        {
            _context = context;
             service= _supplierManagementService;
        }
        [HttpGet]
        public IActionResult GetSuppliers()
        {
            var suppliers = service.GetSuppliers();
            return Ok(suppliers);
        }
        [HttpPost]
        public IActionResult CreateSuppliers([FromBody] SupplierInput request)
        {
            var supplier = service.Create(request);
            return Ok(supplier);
        }
        [HttpPut("{requestId}")]
        public IActionResult EditSupplier([FromBody] SupplierInput request, [FromRoute] int requestId) 
        {
            var supplier = service.Update(request, requestId);
            return Ok(supplier); 
        }
        [HttpDelete("{requestId}")]
        public IActionResult DeleteSupplier([FromRoute] int requestId)
        {
            var supplier = service.Delete(requestId);
            return Ok(supplier);
        }
    }
}
