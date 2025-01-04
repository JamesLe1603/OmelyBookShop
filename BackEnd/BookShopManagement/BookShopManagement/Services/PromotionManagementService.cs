using BookShopManagement.Data;
using BookShopManagement.DTOs.Requests;
using BookShopManagement.DTOs.Responses;
using BookShopManagement.Entities.Models;

namespace BookShopManagement.Services
{
    public class PromotionManagementService
    {
        private readonly BookManagementDbContext _context;
        public PromotionManagementService(BookManagementDbContext context)
        {
            _context = context;
        }
        public List<PromotionDto> GetPromotions()
        {
            var promotions = _context.Promotions.Select(x => new PromotionDto
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                DateStart = x.DateStart,
                DateEnd = x.DateEnd,
                DiscountType = x.DiscountType,
                DiscountValue = x.DiscountValue,
                Status = x.Status
            }).ToList();
            return promotions;
        }
        public int Create(PromotionInput request)
        {
            var newPromotion = new Promotion()
            {
                Name = request.Name,
                Description = request.Description,
                DateStart = DateTime.Now,
                DateEnd = DateTime.Now.AddMonths(6),
                DiscountType = request.DiscountType,
                DiscountValue = request.DiscountValue,
                Status = request.Status
            };
            _context.Add(newPromotion);
            _context.SaveChanges();
            return newPromotion.Id;
        }
        public int Update(PromotionInput request, int requestId)
        {
            var modifiedPromotion = _context.Promotions.Where(x=>x.Id==requestId).FirstOrDefault();
            if(modifiedPromotion != null)
            {
                modifiedPromotion.Name = request.Name;
                modifiedPromotion.Description = request.Description;
                modifiedPromotion.DateStart = modifiedPromotion.DateStart;
                modifiedPromotion.DateEnd = modifiedPromotion.DateEnd;
                modifiedPromotion.DiscountValue = request.DiscountValue;
                modifiedPromotion.Status = request.Status;
                modifiedPromotion.DiscountType = request.DiscountType;
                _context.Promotions.Update(modifiedPromotion);
                _context.SaveChanges();
                return modifiedPromotion.Id;
            }
            return default;
        }
        public int Delete(int requestId) 
        {
            var deletedPromotion = _context.Promotions.Where(x => x.Id == requestId).FirstOrDefault();
            if (deletedPromotion != null)
            {
                _context.Promotions.Remove(deletedPromotion);
                _context.SaveChanges();
                return deletedPromotion.Id; 
            }
            return default; 
        }
    }
}
