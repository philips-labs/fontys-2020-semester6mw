using System;
using System.ComponentModel.DataAnnotations;

namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class UpdateProfileRequestBody
    {
        [Required] public Guid Id { get; set; }
    }
}