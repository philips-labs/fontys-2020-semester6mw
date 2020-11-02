using CoffeeTalk.Microservice.Profile.Config;
using CoffeeTalk.Microservice.Profile.Models.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CoffeeTalk.Microservice.Profile.Data.Context
{
    public class ProfileContext
    {
        private readonly IMongoDatabase _database;

        public ProfileContext(IOptions<ProfileDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.DatabaseName);
            if (client != null)
                _database = client.GetDatabase(settings.Value.DatabaseName);
        }

        public IMongoCollection<ProfileEntity> Profiles 
        {
            get 
            {
                return _database.GetCollection<ProfileEntity>("ProfileEntity");
            }
        }
    }
}