namespace OmelyPortal.Models.Requests
{
    public class NewReviewRequest
    {
        public string Comment {  get; set; }
        public int Rating { get; set; }
        public int BookId { get; set; }
    }
}
