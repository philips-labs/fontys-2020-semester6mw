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
        private Dictionary<string, List<string>> newPossibleMatches;

        public Matcher(List<Profile> profiles, Dictionary<string, List<string>> existingMatches, Dictionary<string, List<string>> newPossibleMatches)
        {
            this.profiles = profiles;
            this.existingMatches = existingMatches;
            this.newPossibleMatches = newPossibleMatches;
        }

        public void CreateMatches() 
        {
            foreach (var profile in profiles) 
            {
                Dictionary<string, double> possibleMatchPercentDictionary = new Dictionary<string, double>();

                for (int i = 0; i < profiles.Count; i++)
                {
                    var possibleMatchProfile = profiles[i];

                    if (possibleMatchProfile.Equals(profile)) continue;
                    if (matchAlreadyExists(profile.Id, possibleMatchProfile.Id)) continue;

                    double interestsPercentage = compareInterests(profile.Interests, possibleMatchProfile.Interests);
                    double projectsPercentage = compareInterestsWithProjects(profile.Interests, possibleMatchProfile.PreviousProjects);

                    double truePercentage = (interestsPercentage * 0.7) + (projectsPercentage * 0.3);

                    possibleMatchPercentDictionary.Add(possibleMatchProfile.Id, truePercentage);
                }

                var possibleMatchPercentList = possibleMatchPercentDictionary.ToList();
                possibleMatchPercentList.Sort((pair1, pair2) => pair1.Value.CompareTo(pair2.Value));

                newPossibleMatches.Add(profile.Id, (from kvp in possibleMatchPercentList select kvp.Key).ToList());
            }
        }

        private double compareInterestsWithProjects(List<string> interestsA, List<Project> projectsB)
        {
            List<string> tags = new List<string>();
            foreach (var project in projectsB)
            {
                project.Tags.ForEach(t => tags.Add(t));
            }

            return compareInterests(interestsA, tags);
        }

        private double compareInterests(List<string> interestsA, List<string> interestsB)
        {
            var commonInterests = interestsA.Intersect(interestsB);
            return (commonInterests.Count() / interestsA.Count()) * 100;
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