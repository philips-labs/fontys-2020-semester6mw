using System;
using System.Collections.Generic;
using System.Linq;
using CoffeeTalk.Microservice.Matching.Models.Entities;

namespace CoffeeTalk.Microservice.Matching.Service
{
    public class Matcher
    {
        private List<Profile> profiles;
        private Dictionary<string, List<string>> existingMatches;

        public void CreateMatches() 
        {
            foreach (var profile in profiles) 
            {
                for (int i = 0; i < profiles.Count; i++)
                {
                    var possibleMatchProfile = profiles[i];

                    if (possibleMatchProfile.Equals(profile)) continue;
                    if (matchAlreadyExists(profile.Id, possibleMatchProfile.Id)) continue;


                }
            }
        }

        private bool matchAlreadyExists(string profileId, string possibleMatchId)
        {
            List<string> value;
            if (existingMatches.ContainsKey(profileId))
            {
                value = existingMatches[profileId];
            }
            else
            {
                return false;
            }

            return value.Exists(x => x == possibleMatchId);
        }
    }
}