using System;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using CoffeeTalk.Microservice.Matching.Models.Entities;
using CoffeeTalk.Microservice.Matching.Data.Context;
using CoffeeTalk.Microservice.Matching.Config;
using MongoDB.Driver;
using MongoDB.Bson;

namespace CoffeeTalk.Microservice.Matching.Data.Repository
{
    public class MatchesRepository : IMatchesRepository
    {
        private readonly MongoContext _context = null;

        public MatchesRepository(IOptions<MongoConfig> settings)
        {
            _context = new MongoContext(settings);
        }

        public void UpsertMatch(string profileId, List<string> orderedMatches)
        {
            _context.Matches.UpdateOne(p => p.ProfileId == profileId,
                Builders<Match>.Update.Set(p => p.OrderedMatches, orderedMatches),
                new UpdateOptions { IsUpsert = true });
        }

        public List<Match> GetMatches()
        {
            try
            {
                return _context.Matches.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}