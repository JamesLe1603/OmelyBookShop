using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using OmelyUser.Data;
using OmelyUser.Models;
using OmelyUser.Models.Requests;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OmelyUser.Services
{
    public class AccountService
    {
        private readonly UserManagementDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly UserManager<User> _userManager;
        public AccountService( UserManagementDbContext context, IConfiguration configuration,UserManager<User> userManager)
        {
            _context = context;
            _configuration = configuration;
            _userManager = userManager;
        }
        public User SignUpUser(SignUpRequest request)
        {
            var user = new User
            {
                UserName = request.UserName,
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName
            };

            return user;
        }
        public IdentityRole CreateRole (AddRole request)
        {
            var newRole = new IdentityRole(request.RoleName);
            return newRole;
        }
        public string GenerateJwtToken(User user)
        {
            var roles = _userManager.GetRolesAsync(user).Result;
            var claims = new List<Claim>();
            claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.UserName));
            claims.Add(new Claim(JwtRegisteredClaimNames.Jti, user.Id));
            foreach (var role in roles)
            {
                claims.Add(new Claim("role", role));
            }
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);
            var tokens = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                notBefore: DateTime.Now.AddSeconds(5),
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(tokens);
        }
    }
}
