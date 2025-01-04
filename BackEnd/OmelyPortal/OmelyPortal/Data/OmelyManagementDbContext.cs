using Microsoft.EntityFrameworkCore;
using OmelyPortal.Models;

namespace OmelyPortal.Data
{
    public class OmelyManagementDbContext:DbContext
    {
        public OmelyManagementDbContext(DbContextOptions<OmelyManagementDbContext> options) : base(options) { }
        public DbSet<Book> Books { get; set; }
    }
}
