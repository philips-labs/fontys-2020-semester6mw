using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using CoffeeTalk.Microservice.Matching.Models.Entities;
using CoffeeTalk.Microservice.Matching.Data.Context;
using CoffeeTalk.Microservice.Matching.Config;
using MongoDB.Driver;

namespace CoffeeTalk.Microservice.Matching.Data.Repository
{
    public class MatchesRepository : IMatchesRepository
    {
        private readonly MongoContext _context = null;

        public MatchesRepository(IOptions<MongoConfig> settings)
        {
            _context = new MongoContext(settings);
        }

        public async Task CreateMatch(string profileId, List<string> orderedMatches)
        {
            Match match = new Match(profileId, orderedMatches);

            try
            {
                await _context.Matches.InsertOneAsync(match);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}