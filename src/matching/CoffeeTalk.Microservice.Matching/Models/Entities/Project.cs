using System.Collections.Generic;

namespace CoffeeTalk.Microservice.Matching.Models.Entities
{
    public class Project
    {
        public string Name { get; set; }
        public string Descripton { get; set; }
        public List<string> Tags { get; set; }
    }
}