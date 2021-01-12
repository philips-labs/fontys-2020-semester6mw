using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CoffeeTalk.Microservice.Profile.Models.Entities;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateUserRequestBody
    {
        [Required] public string Id { get; set; }
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string Age {get; set;}
        public string Description {get; set;}

    }
}