using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CoffeeTalk.Microservice.Profile.Config;
using CoffeeTalk.Microservice.Profile.Data.Context;
using CoffeeTalk.Microservice.Profile.Models.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace CoffeeTalk.Microservice.Profile.Data.Repository
{
    public class ProfileRepositroy : IProfileRepository
    {
        private readonly ProfileContext _context = null;

        public ProfileRepositroy(IOptions<ProfileDatabaseSettings> settings)
        {
            _context = new ProfileContext(settings);
        }

        public async Task CreateProfile(string firstName, string lastName, int age)
        {
            ProfileEntity profileEntity = new ProfileEntity(firstName, lastName, age);

            try
            {
                await _context.Profiles.InsertOneAsync(profileEntity);
            }
            catch (Exception ex) 
            {
                throw ex;
            }
        }

        public async Task<ProfileEntity> GetProfile(string id)
        {
            try 
            {
                return await _context.Profiles.Find(profile => profile.Id == id).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> UpdateProfile(string id, List<string> interests, List<Project> previousProjects)
        {
            var filter = Builders<ProfileEntity>.Filter.Eq(s => s.Id, id);
            var update = Builders<ProfileEntity>.Update
                            .Set(s => s.Interests, interests)
                            .Set(s => s.PreviousProjects, previousProjects)
                            .CurrentDate(s => s.UpdatedOn);

            try 
            {
                UpdateResult actionsResult = await _context.Profiles.UpdateOneAsync(filter, update);

                return actionsResult.IsAcknowledged && actionsResult.ModifiedCount > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}