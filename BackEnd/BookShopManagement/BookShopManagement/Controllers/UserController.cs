using Microsoft.AspNetCore.Mvc;
using BookShopManagement.Data;
using System.Data;
using BookShopManagement.Services;
using BookShopManagement.DTOs.Requests;
using Microsoft.AspNetCore.Identity;

namespace BookShopManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        //private readonly UserManager<IdentityUser> _userManager;
        //private readonly RoleManager<IdentityRole> _roleManager;
        //private readonly BookManagementDbContext context;
        //private readonly UserManagementService service;
        //public UserController(BookManagementDbContext ctx, UserManagementService userManagementService, RoleManager<IdentityRole> roleManager, UserManager userManager)
        //{
        //    context = ctx;
        //    service = userManagementService;
        //    _roleManager = roleManager;
        //    _userManager = userManager;
        //}
        //[HttpGet]
        //public IActionResult GetUsers()
        //{
        //    var users = service.GetUsers();
        //    return Ok(users);
        //}
        //[HttpPost]
        //[Route("Register")]
        //public IActionResult CreateUser([FromBody] RegisterRequest request)
        //{
        //    var user = service.Create(request);
        //    return Ok(user);
        //}
        //[HttpPut("{requestId}")]
        //public IActionResult EditUser([FromBody] UserInput request, [FromRoute] int requestId)
        //{
        //    var user = service.Update(request, requestId);
        //    return Ok(user);
        //}
        //[HttpDelete("{requestId}")]
        //public IActionResult DeleteUser([FromRoute] int requestId)
        //{
        //    var user = service.Delete(requestId);
        //    return Ok(user);
        //}
    }
}
