using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OmelyUser.Models;

namespace OmelyUser.Data
{
    public class UserManagementDbContext : IdentityDbContext<User>
    {
        public UserManagementDbContext(DbContextOptions<UserManagementDbContext> options) : base(options) { }
    }
}
