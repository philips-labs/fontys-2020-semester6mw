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
    public class ProfileRepository : IProfileRepository
    {
        private readonly MongoContext _context = null;

        public ProfileRepository(IOptions<MongoConfig> settings)
        {
            _context = new MongoContext(settings);
        }

        public List<Profile> GetProfiles()
        {
            try
            {
                return _context.Profiles.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}