using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;

namespace OmelyPortal.Services
{
    public class PublisherService
    {
        private readonly OmelyManagementDbContext _context;
        public PublisherService(OmelyManagementDbContext context)
        {
            _context = context;
        }
        public int CreatePublisher (NewPublisherRequest request)
        {
            var newPublisher = new Publisher
            {
                Name = request.PublisherName,
                Address = request.Address
            };
            _context.Publishers.Add(newPublisher);
            _context.SaveChanges();
            return newPublisher.Id;
        }
    }
}
