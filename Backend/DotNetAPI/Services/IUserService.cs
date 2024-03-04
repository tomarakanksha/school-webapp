using DotNetAPI.Models;

namespace DotNetAPI.Services
{
    public interface IUserService
    {
        Task<AuthenticateResponse?> Authenticate(AuthenticateRequest model);
        Task<IEnumerable<User>> GetAll();
        Task<User?> GetById(int id);
        Task<string> GetRoleById(int id);
        List<string> GetAllRoles();
        Task<User?> AddAndUpdateUser(User userObj);
    }
}
