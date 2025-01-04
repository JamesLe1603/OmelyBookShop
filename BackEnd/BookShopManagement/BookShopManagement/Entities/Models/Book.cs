using BookShopManagement.Entities.Enums;
using System.Runtime.CompilerServices;

namespace BookShopManagement.Entities.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Author Author { get; set; }
        public Genre Genre { get; set; }
        public Language Language { get; set; }
        public Publisher Publisher { get; set; }
        public string Image {  get; set; }
        public int PromotionId { get; set; }
        public Promotion Promotion { get; set; }
        public int PageNumber {  get; set; }
        public int PublishYear { get; set; }
    }
}
