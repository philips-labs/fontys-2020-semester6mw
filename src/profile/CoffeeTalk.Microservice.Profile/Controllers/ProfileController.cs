using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using CoffeeTalk.Microservice.Profile.Services;

namespace CoffeeTalk.Microservice.Profile.Controllers
{
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _service;

        public ProfileController(IProfileService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetProfile(Guid profileId)
        {
            var result = await _service.GetProfile(profileId);
            if (result == null) return NotFound("This profile does not exist");
            return Ok(result);
        }
    }
}