using DotNetAPI.Helpers;
using DotNetAPI.Models;
using Microsoft.CodeAnalysis.Elfie.Model.Strings;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DotNetAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _applicationDbContext;

        public UserService(IConfiguration configuration, ApplicationDbContext applicationDbContext)
        {
            _configuration = configuration;
            _applicationDbContext = applicationDbContext;
        }

        public async Task<AuthenticateResponse?> Authenticate(AuthenticateRequest model)
        {
            var user = await _applicationDbContext.Users.SingleOrDefaultAsync(x => x.Email == model.Email && x.Password == model.Password);

            if (user == null) 
            {
                return null;
            }
            var role = await _applicationDbContext.Roles.FirstOrDefaultAsync(r => r.ID == user.RoleID);
            // authentication successful so generate jwt token
            var token = await generateJwtToken(user);

            return new AuthenticateResponse(user, token, role.Name);
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _applicationDbContext.Users.Where(x => x.isActive == true).ToListAsync();
        }

        public async Task<User?> GetById(int id)
        {
            var user = await _applicationDbContext.Users.FirstOrDefaultAsync(x => x.ID == id);
            if (user == null)
            {
                return null;
            }
            return user;
        }

        public async Task<User?> AddAndUpdateUser(User userObj)
        {
            bool isSuccess = false;
            if (userObj.ID > 0)
            {
                var obj = await _applicationDbContext.Users.FirstOrDefaultAsync(c => c.ID == userObj.ID);
                if (obj != null)
                {
                    // obj.Address = userObj.Address;
                    obj.FirstName = userObj.FirstName;
                    obj.LastName = userObj.LastName;
                    _applicationDbContext.Users.Update(obj);
                    isSuccess = await _applicationDbContext.SaveChangesAsync() > 0;
                }
            }
            else
            {
                await _applicationDbContext.Users.AddAsync(userObj);
                isSuccess = await _applicationDbContext.SaveChangesAsync() > 0;
            }

            return isSuccess ? userObj : null;
        }
        
        public async Task<string> GetRoleById(int id)
        {
            var roleName =  await _applicationDbContext.Roles.Where(r => r.ID == id)
                .Select(r => r.Name)
                .FirstOrDefaultAsync();

            return roleName;
        }
        public List<string> GetAllRoles()
        {
            return _applicationDbContext.Roles.Select(x => x.Name).ToList();
        }
        // helper methods
        private async Task<string> generateJwtToken(User user)
        {
            //Generate token that is valid for 3 hours
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = await Task.Run(() =>
            {

                var key = Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                    {
                        new Claim("ID", user.ID.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddHours(3),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                return tokenHandler.CreateToken(tokenDescriptor);
            });

            return tokenHandler.WriteToken(token);
        }
    }
}
