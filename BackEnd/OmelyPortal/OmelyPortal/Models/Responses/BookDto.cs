namespace OmelyPortal.Models.Responses
{
    public class BookDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int PageNumber { get; set; }
    }
}
