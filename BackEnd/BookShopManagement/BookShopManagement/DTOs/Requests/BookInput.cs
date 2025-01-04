using BookShopManagement.Entities.Enums;
using BookShopManagement.Entities.Models;

namespace BookShopManagement.DTOs.Requests
{
    public class BookInput
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int AuthorId { get; set; }
        public int GenreId { get; set; }
        public int LanguageId { get; set; }
        public int PublisherId { get; set; }
        public string Image { get; set; }
        public int PromotionId { get; set; }
        public int PageNumber { get; set; }
        public int PublishYear { get; set; }
    }
}
