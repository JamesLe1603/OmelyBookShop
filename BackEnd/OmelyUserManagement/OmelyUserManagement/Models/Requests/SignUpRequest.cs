﻿namespace OmelyUser.Models.Requests
{
    public class SignUpRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; } 
        public IFormFile ProfileImage {  get; set; }
    }
}
