using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoffeeTalk.Microservice.Profile.Models.Entities;

namespace CoffeeTalk.Microservice.Profile.Services
{
    public interface IProfileService
    {
        Task<ProfileEntity> GetProfile(Guid profileId);
    }
}