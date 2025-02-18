﻿namespace BookShopManagement.Entities.Models
{
    public class Supplier
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public ICollection<PurchaseOrder> PurchaseOrders { get; set; }
    }
}
