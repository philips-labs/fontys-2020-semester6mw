using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace CoffeeTalk.Microservice.Matching.Models.Entities
{
    public class Profile
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        
        public int Age { get; set; }

        public ProfileImage ProfileImage { get; set; }

        public DateTime UpdatedOn { get; set; }

        public List<string> Interests { get; set; } = new List<string>();

        public List<Project> PreviousProjects { get; set; } = new List<Project>();

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType()) return false;

            Profile profile = (Profile) obj;
            return Equals(obj);
        }

        private bool Equals(Profile other)
        {
            return this.Id == other.Id;
        }
        
        public override int GetHashCode()
        {
            unchecked
            {
                int hashCode = Id.GetHashCode();
                hashCode = (hashCode * 13) ^ FirstName.GetHashCode();
                hashCode = (hashCode * 13) ^ LastName.GetHashCode();
                hashCode = (hashCode * 13) ^ Age.GetHashCode();
                return hashCode;
            }
        }
    }
}