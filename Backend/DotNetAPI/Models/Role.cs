using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DotNetAPI.Models
{
    public class Role
    {
        public int ID { get; set; }
        public required string Name { get; set; }

    }
}
