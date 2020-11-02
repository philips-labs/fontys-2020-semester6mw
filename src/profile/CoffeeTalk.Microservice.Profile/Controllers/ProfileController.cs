using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoffeeTalk.Microservice.Profile.Models.RequestBody;

using CoffeeTalk.Microservice.Profile.Services;

namespace CoffeeTalk.Microservice.Profile.Controllers
{
    [ApiController]
    [Route("[controller]")]
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

        [HttpPut]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileRequestBody updateProfileRequestBody) 
        {
            var result = await _service.UpdateProfile(updateProfileRequestBody);
            return Ok();
        }
    }
}