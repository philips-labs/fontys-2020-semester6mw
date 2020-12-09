using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CoffeeTalk.Microservice.Profile.Models.Entities
{
    public class ProfileEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        
        public int Age { get; set; }

        public string Description { get; set; }

        public ProfileImage ProfileImage { get; set; }

        [BsonDateTimeOptions]
        public DateTime UpdatedOn { get; set; }

        public List<string> Interests { get; set; } = new List<string>();

        public List<Project> PreviousProjects { get; set; } = new List<Project>();

        public ProfileEntity(string firstName, string lastName, int age, string description)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Description = description;
        }
    }
}