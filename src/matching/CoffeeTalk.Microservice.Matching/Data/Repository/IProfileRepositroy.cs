using System.Threading.Tasks;
using System.Collections.Generic;
using CoffeeTalk.Microservice.Matching.Models.Entities;

namespace CoffeeTalk.Microservice.Matching.Data.Repository
{
    public interface IProfileRepositroy
    {
         Task<IEnumerable<Profile>> GetProfiles();
    }
}