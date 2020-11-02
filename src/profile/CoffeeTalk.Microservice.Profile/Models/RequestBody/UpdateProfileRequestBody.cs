using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CoffeeTalk.Microservice.Profile.Models.Entities;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateProfileRequestBody
    {
        [Required] public string Id { get; set; }
        public List<string> Interests { get; set; }
        public List<Project> PreviousProjects { get; set; }
    }
}