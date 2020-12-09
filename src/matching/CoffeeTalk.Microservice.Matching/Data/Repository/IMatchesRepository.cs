using System.Threading.Tasks;
using System.Collections.Generic;
using CoffeeTalk.Microservice.Matching.Models.Entities;

namespace CoffeeTalk.Microservice.Matching.Data.Repository
{
    public interface IMatchesRepository
    {
        List<Match> GetMatches();
        Match GetMatchById(string profileId);
        void UpsertMatch(string profileId, List<string> orderedMatches);
    }
}