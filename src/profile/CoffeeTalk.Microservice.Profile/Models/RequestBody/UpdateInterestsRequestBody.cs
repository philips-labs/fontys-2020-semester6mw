using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CoffeeTalk.Microservice.Profile.Models.Entities;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateInterestsRequestBody
    {
        [Required] public string Id { get; set; }
        public List<string> Interests {get; set; }

    }
}