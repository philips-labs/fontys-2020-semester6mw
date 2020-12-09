using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using CoffeeTalk.Microservice.Matching.Service;
using CoffeeTalk.Microservice.Matching.Data.Repository;

namespace CoffeeTalk.Microservice.Matching.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MatchingController : ControllerBase
    {
        private readonly IMatcher _matcher;
        private readonly IMatchesRepository _matchesRepo;

        public MatchingController(IMatcher matcher, IMatchesRepository matchesRepo)
        {
            _matcher = matcher;
            _matchesRepo = matchesRepo;
        }

        [HttpGet("{id}")]
        public IActionResult GetMatch(string id)
        {
            var result = _matchesRepo.GetMatchById(id);
            if (result == null) return NotFound("This profile does not have any matches");
            return Ok(result);
        }

        [HttpGet]
        public IActionResult GetMatches()
        {
            var result = _matchesRepo.GetMatches();
            if (result == null) return NotFound("No matches found");
            return Ok(result);
        }

        [HttpPost]
        public void CreateNewMatches() 
        {
            _matcher.CreateMatches();
        }
    }
}