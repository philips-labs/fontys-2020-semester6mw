namespace CoffeeTalk.Microservice.Profile.Models.RequestBody
{
    public class CreateProfileRequestBody
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Age { get; set; }
        public string Description { get; set; }
    }
}