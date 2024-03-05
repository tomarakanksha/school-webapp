using System.ComponentModel.DataAnnotations;

namespace DotNetAPI.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string RoleName { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(User user, string token, string roleName)
        {
            Id = user.ID;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
            Token = token;
            RoleName = roleName;
        }
    }
}