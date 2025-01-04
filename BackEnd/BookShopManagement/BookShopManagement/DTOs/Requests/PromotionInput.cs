using System.ComponentModel.DataAnnotations;

namespace BookShopManagement.DTOs.Requests
{
    public class PromotionInput
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string DiscountType { get; set; }
        [Required]
        public decimal DiscountValue { get; set; }
        [Required]
        public bool Status { get; set; }
    }
}
