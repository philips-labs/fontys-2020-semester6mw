using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateProfileRequestBody
    {
        [Required] public string Id { get; set; }
        public List<string> Interests { get; set; }
        public List<string> PreviousProjects { get; set; }
    }
}