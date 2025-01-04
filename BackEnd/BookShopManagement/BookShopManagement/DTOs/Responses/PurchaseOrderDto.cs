using BookShopManagement.Entities.Models;

namespace BookShopManagement.DTOs.Responses
{
    public class PurchaseOrderDto
    {
        public int PurchaseOrderId { get; set; }
        public string PurchaseOrderName { get; set; }
        public DateTime OrderDate { get; set; }
        public int TotalAmount { get; set; }
        public Supplier Supplier { get; set; }
    }
}
