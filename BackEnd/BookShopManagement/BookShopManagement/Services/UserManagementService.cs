using BookShopManagement.Data;
using BookShopManagement.DTOs.Requests;
using BookShopManagement.DTOs.Responses;
using BookShopManagement.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BookShopManagement.Services
{
    public class UserManagementService
    {
        private readonly BookManagementDbContext context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public UserManagementService(BookManagementDbContext ctx, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            context = ctx;
            _userManager = userManager; 
            _roleManager = roleManager;
        }
        //public List<UserDto> GetUsers()
        //{
        //    var users = context.Users.Select(x => new UserDto
        //    {
        //        UserId = x.Id,
        //        UserName = x.UserName,
        //        Password = x.Password,
        //        Phone = x.Phone
        //    }).ToList();
        //    return users;
        //}
        //public async Task<IActionResult> Create(RegisterRequest request)
        //{

        //    var newUser = new User()
        //    {
        //        LastName = request.LastName,
        //        FirstName = request.FirstName,
        //    };
        //    var result = await _userManager.CreateAsync(newUser);
        //    return 0;
        //}
        //public int Update(UserInput request, int requestId)
        //{
        //    var modifiedUser = context.Users.Where(x => x.Id == requestId).FirstOrDefault();
        //    if (modifiedUser != null)
        //    {
        //        modifiedUser.UserName = request.UserName;
        //        modifiedUser.Password = request.Password;
        //        modifiedUser.Phone = request.Phone;
        //        context.Update(modifiedUser);
        //        context.SaveChanges();
        //        return modifiedUser.Id;
        //    }
        //    return default;
        //}
        //public int Delete(int requestId)
        //{
        //    var deletedUser = context.Users.Where(x => x.Id == requestId).FirstOrDefault();
        //    if (deletedUser != null)
        //    {
        //        context.Users.Remove(deletedUser);
        //        context.SaveChanges();
        //        return deletedUser.Id;
        //    }
        //    return default;
        //}
    }
}
