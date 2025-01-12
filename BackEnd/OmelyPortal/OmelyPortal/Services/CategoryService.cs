using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;
using OmelyPortal.Models.Responses;

namespace OmelyPortal.Services
{
    public class CategoryService
    {
        private readonly OmelyManagementDbContext _context;
        public CategoryService(OmelyManagementDbContext context)
        {
            _context = context;
        }
        public int AddCategory (NewCategoryRequest request)
        {
            var newCategory = new Category
            {
                Name = request.CategoryName
            };
            _context.Categories.Add(newCategory);
            _context.SaveChanges();
            return newCategory.Id;
        }
        public int EditCategory(NewCategoryRequest request,int id)
        {
            var editedCategory = _context.Categories.Where(x => x.Id == id).FirstOrDefault();
            if (editedCategory!=null)
            {
                editedCategory.Name = request.CategoryName;
                _context.Categories.Update(editedCategory);
                _context.SaveChanges();
                return editedCategory.Id;
            }
            return default;
        }
        public int DeleteCategory(int id)
        {
            var deletedCategory = _context.Categories.Where(x => x.Id == id).FirstOrDefault();
            if (deletedCategory != null)
            {
                _context.Categories.Remove(deletedCategory);
                _context.SaveChanges();
                return deletedCategory.Id;
            }
            return default;
        }
        public List<CategoryDto> GetCategories()
        {
            var categories = _context.Categories.Select(category => new CategoryDto
            {
                CategoryId = category.Id,
                CategoryName = category.Name,
            }).ToList();
            return categories;
        }
    }
}
