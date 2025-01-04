namespace BookShopManagement.Entities.Models
{
    public class PurchaseOrder
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime OrderDate { get; set; }
        public int TotalAmount { get; set; }
        public int SupplierId { get; set; }
        public Supplier Supplier { get; set; }
    }
}
