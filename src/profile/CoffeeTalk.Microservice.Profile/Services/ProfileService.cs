using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeTalk.Microservice.Profile.Services
{
    public class ProfileService : IProfileService
    {
        public ProfileService()
        {
        }

        public async Task<IActionResult> GetProfileData() 
        {
            
        }
    }
}