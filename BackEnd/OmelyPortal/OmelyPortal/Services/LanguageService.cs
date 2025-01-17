using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;
using System.Data;

namespace OmelyPortal.Services
{
    public class LanguageService
    {
        private readonly OmelyManagementDbContext _context;
        public LanguageService(OmelyManagementDbContext context)
        {
            _context = context;
        }
        public int CreateLanguage (NewLanguageRequest request)
        {
            var newLanguage = new Language
            {
                Name = request.LanguageName
            };
            _context.Languages.Add(newLanguage);
            _context.SaveChanges();
            return newLanguage.Id;
        }
        public List<LanguageDto> GetLanguages()
        {
            var languages = _context.Languages.Select(x => new LanguageDto
            {
                Id = x.Id,
                Name = x.Name,
            }).ToList();
            return languages;
        }
    }
}
