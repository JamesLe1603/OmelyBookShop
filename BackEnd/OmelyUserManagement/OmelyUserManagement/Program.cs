
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using OmelyUser.Data;
using OmelyUser.Models;
using OmelyUser.Services;
using System.Text;

namespace OmelyUser
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var jwtSettings = builder.Configuration.GetSection("Jwt");
            var key = Encoding.UTF8.GetBytes(jwtSettings["Key"]);

            //Add Cors
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowErpDefault",
                    builder => builder
                        .WithOrigins("http://localhost:3000", "http://192.168.153.1:3000")
                        .AllowAnyMethod()
                        .AllowAnyOrigin()
                        .AllowAnyHeader());
            });

            // Add services to the container.
            builder.Services.AddControllers();

            //Dependency Injection
            builder.Services.AddScoped<AccountService>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
            });

            // Add Context
            builder.Services.AddIdentity<User,IdentityRole>()
                .AddEntityFrameworkStores<UserManagementDbContext>()
                .AddDefaultTokenProviders();
            builder.Services.AddDbContext<UserManagementDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            
            //Add Authentication
            builder.Services.AddAuthentication(
                options => {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                //jwt
                .AddJwtBearer(options =>
                {
                    options.SaveToken = true;
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidAudience = jwtSettings["Audience"],
                        ValidIssuer = jwtSettings["Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(key)

                    };
                });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseCors("AllowErpDefault");

            app.MapControllers();

            app.Run();
        }
    }
}
