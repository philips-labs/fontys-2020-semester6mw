using System;
using System.Collections.Generic;

namespace CoffeeTalk.Microservice.Matching.Models.Entities
{
    public class Match
    {
        public string ProfileId { get; set; }
        public List<string> OrderedMatches { get; set; } = new List<string>();

        public Match(string profileId, List<string> orderedMatches)
        {
            ProfileId = profileId;
            OrderedMatches = orderedMatches;
        }
    }
}