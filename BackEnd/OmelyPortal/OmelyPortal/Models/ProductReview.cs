using System.ComponentModel.DataAnnotations;

namespace OmelyPortal.Models
{
    public class ProductReview
    {
        [Key]
        public int ReviewId { get; set; }
        public int BookId { get; set; }
        [Range(1,5)]
        public int Rating { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public Book Book { get; set; }
    }
}
