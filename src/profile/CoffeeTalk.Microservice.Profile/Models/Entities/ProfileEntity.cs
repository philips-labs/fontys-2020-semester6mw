using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CoffeeTalk.Microservice.Profile.Models.Entities
{
    public class ProfileEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id;

        [BsonElement("Name")]
    }
}