using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;

namespace OmelyPortal.Services
{
    public class FileService
    {
        private readonly OmelyManagementDbContext _context;
        public FileService(OmelyManagementDbContext context)
        {
            _context = context;
        }
        public int UploadFile(NewFileExRequest request)
        {
            string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }
            string profileImagePath = null;
            if (request != null && request.file.Length > 0)
            {
                string fileName = $"{Guid.NewGuid()}_{Path.GetFileName(request.file.FileName)}";
                string filePath = Path.Combine(uploadPath, fileName);
                //luu file
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    request.file.CopyTo(stream);
                }
                profileImagePath = $"/uploads/{fileName}";
            }
            var newFile = new UploadFile
            {
                Name = profileImagePath
            };
            _context.Files.Add(newFile);
            _context.SaveChanges();
            return newFile.Id;
        }
    }
}
