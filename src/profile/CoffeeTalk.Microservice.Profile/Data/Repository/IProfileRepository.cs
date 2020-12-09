using CoffeeTalk.Microservice.Profile.Models.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoffeeTalk.Microservice.Profile.Data.Repository
{
    public interface IProfileRepository
    {
        Task<IEnumerable<ProfileEntity>> GetAllProfiles();
        Task<ProfileEntity> GetProfile(string id);
        Task<bool> UpdateProfile(string id, List<string> interests, List<Project> previousProjects);
        Task CreateProfile(string firstName, string lastName, int age, string description);
    }
}