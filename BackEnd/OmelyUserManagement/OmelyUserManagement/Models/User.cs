﻿using Microsoft.AspNetCore.Identity;

namespace OmelyUser.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string ProfileImage { get; set; } = string.Empty;
    }
}
