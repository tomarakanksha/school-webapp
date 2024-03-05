using System.ComponentModel.DataAnnotations;

namespace DotNetAPI.Models
{
    public class AuthenticateRequest
    {
        [Required(ErrorMessage = "Email is required")]
        public required string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public required string Password { get; set; }
    }
}