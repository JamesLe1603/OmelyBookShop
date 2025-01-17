
using Microsoft.EntityFrameworkCore;
using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Hubs;
using OmelyPortal.Services;

namespace OmelyPortal
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //Cors
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowErpDefault",
                    builder =>
                    {
                        builder
                        .WithOrigins("http://localhost:3000", "http://192.168.153.1:3000")
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                    });
            });
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            //DbContext
            builder.Services.AddDbContext<OmelyManagementDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });
            //SignalR
            builder.Services.AddSignalR();
            //DI
            builder.Services.AddScoped<BookService>();
            builder.Services.AddScoped<LanguageService>();
            builder.Services.AddScoped<PublisherService>();
            builder.Services.AddScoped<AuthorService>();
            builder.Services.AddScoped<GenreService>();
            builder.Services.AddScoped<CategoryService>();
            builder.Services.AddScoped<FileService>();
            builder.Services.AddScoped<ReviewService>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("AllowErpDefault");

            app.UseStaticFiles();

            app.MapControllers();
            app.MapHub<InventoryHub>("/inventoryHub");
            app.Run();
        }
    }
}
