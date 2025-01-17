namespace OmelyPortal.Models.Responses
{
    public class BookDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int PageNumber { get; set; }
        public string Image {  get; set; }
        public int Stock { get; set; }
        public Author Author { get; set; }
        public Genre Genre { get; set; }
        public Publisher Publisher { get; set; }
        public Language Language { get; set; }
    }
}
