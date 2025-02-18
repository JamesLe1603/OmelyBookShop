﻿namespace BookShopManagement.DTOs.Responses
{
    public class PromotionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public string DiscountType { get; set; }
        public decimal DiscountValue { get; set; }
        public bool Status { get; set; }
    }
}
