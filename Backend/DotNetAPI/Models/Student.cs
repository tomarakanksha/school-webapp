using DotNetAPI.Models;

namespace DotNetAPI.Models
{
   public class Student
    {
        public int ID { get; set; }
        public int GradeLevel { get; set; }
        public float GPA { get; set; }

        // Navigation properties
        public required User User { get; set; }
    }
}