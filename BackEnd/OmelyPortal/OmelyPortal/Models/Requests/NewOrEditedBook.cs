namespace OmelyPortal.Models.Requests
{
    public class NewOrEditedBook
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int PageNumber { get; set; }
    }
}
