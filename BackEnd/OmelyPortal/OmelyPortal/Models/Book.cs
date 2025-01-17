namespace OmelyPortal.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image {  get; set; }
        public decimal Price { get; set; }
        public int PageNumber { get; set; }
        public int GenreId { get; set; }
        public Genre Genre { get; set; }
        public int LanguageId { get; set; }
        public Language Language { get; set; }
        public int AuthorId { get; set; }
        public Author Author { get; set; }
        public int PublisherId { get; set; }
        public Publisher Publisher { get; set; }
        public int Stock {  get; set; }
    }
}
