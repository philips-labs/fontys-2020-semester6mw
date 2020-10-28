using System;
using System.Threading.Tasks;
using CoffeeTalk.Microservice.Profile.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeTalk.Microservice.Profile.Services
{
    public class ProfileService : IProfileService
    {
        public ProfileService()
        {
        }

        public Task<ProfileEntity> GetProfile(Guid profileId)
        {
            throw new NotImplementedException();
        }
    }
}