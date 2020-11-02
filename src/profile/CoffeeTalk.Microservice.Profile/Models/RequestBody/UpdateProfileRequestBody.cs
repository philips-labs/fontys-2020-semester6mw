using System;
using System.ComponentModel.DataAnnotations;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateProfileRequestBody
    {
        [Required] public string Id { get; set; }
    }
}