using CoffeeTalk.Microservice.Matching.Config;
using CoffeeTalk.Microservice.Matching.Models.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CoffeeTalk.Microservice.Matching.Data.Context
{
    public class MongoContext
    {
        private readonly IMongoDatabase _profiledb = null;
        private readonly IMongoDatabase _matchesdb = null;

        public MongoContext(IOptions<MongoConfig> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _profiledb = client.GetDatabase(settings.Value.ProfileDatabase);
                _matchesdb = client.GetDatabase(settings.Value.MatchesDatabase);
            }
        }

        public IMongoCollection<Profile> Profiles
        {
            get
            {
                return _profiledb.GetCollection<Profile>("ProfileEntity");
            }
        }

        public IMongoCollection<Match> Matches
        {
            get
            {
                return _matchesdb.GetCollection<Match>("PossibleMatches");
            }
        }
    }
}