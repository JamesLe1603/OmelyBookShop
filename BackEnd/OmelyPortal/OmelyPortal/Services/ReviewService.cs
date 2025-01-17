using Microsoft.EntityFrameworkCore;
using OmelyPortal.Data;
using OmelyPortal.Models;
using OmelyPortal.Models.Requests;

namespace OmelyPortal.Services
{
    public class ReviewService
    {
        private readonly OmelyManagementDbContext _context;
        public ReviewService (OmelyManagementDbContext context)
        {
            _context = context;
        }
        public async Task<List<ProductReview>> GetAllReviewsByProduct (int bookId)
        {
            var reviews = await _context.ProductReviews.Where(r=> r.BookId == bookId).ToListAsync();
            return reviews;
        }
        public async Task<int> AddProductReview (NewReviewRequest request)
        {
            var newReview = new ProductReview
            {
                Comment = request.Comment,
                Rating = request.Rating,
                BookId = request.BookId
            };
            _context.ProductReviews.Add(newReview);
            await _context.SaveChangesAsync();
            return newReview.ReviewId;
        }
        public async Task<int> DeleteProductReview (int id)
        {
            var deletedReview = _context.ProductReviews.FirstOrDefault(r=>r.ReviewId==id);
            _context.ProductReviews.Remove(deletedReview);
            await _context.SaveChangesAsync();
            return deletedReview.ReviewId;
        }
    }
}
