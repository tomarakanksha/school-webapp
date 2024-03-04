using DotNetAPI.Models;

namespace DotNetAPI.Models
{
    public class Teacher
    {
        public int ID { get; set; }
        public required string Subject { get; set; }
        public int YearsOfExperience { get; set; }

        public required User User { get; set; }
    }
}