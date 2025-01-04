using BookShopManagement.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BookShopManagement.Data
{
    public class BookManagementDbContext : IdentityDbContext<User>
    {
        public BookManagementDbContext(DbContextOptions<BookManagementDbContext> options) : base(options) { }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}
