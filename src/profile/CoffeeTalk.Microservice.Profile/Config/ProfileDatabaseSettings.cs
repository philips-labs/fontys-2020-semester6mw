namespace CoffeeTalk.Microservice.Profile.Config
{
    public class ProfileDatabaseSettings : IProfileDatabaseSettings
    {
        public string ProfileCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IProfileDatabaseSettings 
    {
        string ProfileCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}