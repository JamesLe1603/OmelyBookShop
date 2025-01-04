using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using OmelyUser.Models;
using OmelyUser.Models.Requests;
using OmelyUser.Services;

namespace OmelyUser.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly AccountService _accountService;
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AccountController(AccountService accountService, SignInManager<User> signInManager, UserManager<User> userManager, RoleManager<IdentityRole> roleManager) 
        {
            _accountService = accountService;
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] SignUpRequest request)
        {
            var user = _accountService.SignUpUser(request);
            var result = await _userManager.CreateAsync(user, request.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Customer");
                return Ok(user.Id);
            }
            return BadRequest();
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] SignInRequest request)
        {
            var login = await _signInManager.PasswordSignInAsync(request.UserName, request.Password, false, false);
            if (login.Succeeded)
            {
                var loginUser = await _userManager.FindByNameAsync(request.UserName);
                var tokens = _accountService.GenerateJwtToken(loginUser);
                return Ok(tokens);
            }
            return BadRequest();
        }
        [HttpPost("add-new-role")]
        public async Task<IActionResult> AddRoles([FromBody] AddRole roleName)
        {
            var roleExists = await _roleManager.RoleExistsAsync(roleName.RoleName);
            if (!roleExists)
            {
                var newRole = _accountService.CreateRole(roleName);
                var result = await _roleManager.CreateAsync(newRole);
                if (result.Succeeded)
                {
                    return Ok(newRole.Id);
                }
                return BadRequest();
            }
            return BadRequest();
        }
        [HttpPost("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] SignUpRequest signUpRequest)
        {
            var existedUser = await _userManager.FindByNameAsync(signUpRequest.UserName);
            if (existedUser == null)
            {
                var newUser = _accountService.SignUpUser(signUpRequest);
                var result = await _userManager.CreateAsync(newUser,signUpRequest.Password);
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(newUser, "Admin");
                    return Ok(newUser.Id);
                }
                return BadRequest();
            }
            return BadRequest();
        }
        [HttpDelete("delete-account")]
        public async Task<IActionResult> DeleteAccount([FromBody] string username)
        {
            var deleteUser = await _userManager.FindByNameAsync(username);
            if (deleteUser == null)
            {
                return BadRequest();
            }
            var result = await _userManager.DeleteAsync(deleteUser);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
