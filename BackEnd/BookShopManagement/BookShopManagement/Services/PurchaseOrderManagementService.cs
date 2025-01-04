using BookShopManagement.Data;
using BookShopManagement.DTOs.Responses;
using System.Security.AccessControl;

namespace BookShopManagement.Services
{
    public class PurchaseOrderManagementService
    {
        private readonly BookManagementDbContext context;
        public PurchaseOrderManagementService (BookManagementDbContext ctx)
        {
            context =ctx;
        }
        public List<PurchaseOrderDto> GetPurchaseOrders()
        {
            var dataList = context.PurchaseOrders.Select(x => new PurchaseOrderDto
            {
                PurchaseOrderId = x.Id,
                PurchaseOrderName = x.Name,
                OrderDate = x.OrderDate,
                TotalAmount = x.TotalAmount,
                Supplier = x.Supplier
            }).ToList();
            return dataList;
        }
    }
}
