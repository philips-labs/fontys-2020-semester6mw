using System.Collections.Generic;

namespace CoffeeTalk.Microservice.Matching.Models.Entities
{
    public class Profile
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        
        public int Age { get; set; }

        public ProfileImage ProfileImage { get; set; }

        public DateTime UpdatedOn { get; set; }

        public List<string> Interests { get; set; } = new List<string>();

        public List<Project> PreviousProjects { get; set; } = new List<Project>();
    }
}