using Microsoft.EntityFrameworkCore;
using OmelyPortal.Models;

namespace OmelyPortal.Data
{
    public class OmelyManagementDbContext:DbContext
    {
        public OmelyManagementDbContext(DbContextOptions<OmelyManagementDbContext> options) : base(options) { }
        public DbSet<Book> Books { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
