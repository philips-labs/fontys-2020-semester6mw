using System.Collections.Generic;

namespace CoffeeTalk.Microservice.Profile.Models.Entities
{
    public class Project
    {
        public string Name { get; set; }
        public string Descripton { get; set; }
        public List<string> Tags { get; set; }
    }
}