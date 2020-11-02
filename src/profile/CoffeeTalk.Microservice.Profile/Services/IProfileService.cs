using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoffeeTalk.Microservice.Profile.Models.Entities;
using CoffeeTalk.Microservice.Profile.Models.RequestBody;

namespace CoffeeTalk.Microservice.Profile.Services
{
    public interface IProfileService
    {
        Task<ProfileEntity> GetProfile(string profileId);
        Task<ProfileEntity> UpdateProfile(UpdateProfileRequestBody updateProfileRequestBody);
    }
}