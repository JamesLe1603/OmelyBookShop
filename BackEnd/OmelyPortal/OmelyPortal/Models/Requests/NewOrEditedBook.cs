﻿namespace OmelyPortal.Models.Requests
{
    public class NewOrEditedBook
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int PageNumber { get; set; }
        public IFormFile BookImage { get; set; }
        public int GenreId { get; set; }
        public int PublisherId { get; set; }
        public int AuthorId { get; set; }
        public int LanguageId { get; set; }
    }
}
