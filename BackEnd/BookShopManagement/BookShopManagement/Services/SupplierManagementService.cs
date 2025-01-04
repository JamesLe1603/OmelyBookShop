using BookShopManagement.Data;
using BookShopManagement.DTOs.Requests;
using BookShopManagement.DTOs.Responses;
using BookShopManagement.Entities.Models;

namespace BookShopManagement.Services
{
    public class SupplierManagementService
    {
        private readonly BookManagementDbContext context;
        public SupplierManagementService(BookManagementDbContext ctx)
        {
            context = ctx;
        }
        public List<SupplierDto> GetSuppliers()
        {
            var suppliers = context.Suppliers.Select(x => new SupplierDto
            {
                SupplierId = x.Id,
                SupplierName = x.Name,
                SupplierAddress = x.Address,
                SupplierPhone = x.Phone
            }).ToList();
            return suppliers;
        }
        public int Create(SupplierInput request)
        {
            var newSupplier = new Supplier()
            {
                Name = request.SupplierName,
                Address = request.SupplierAddress,
                Phone = request.SupplierPhone
            };
            context.Suppliers.Add(newSupplier);
            context.SaveChanges();
            return newSupplier.Id;
        }
        public int Update(SupplierInput request,int requestId) 
        {
            var modifiedSupplier = context.Suppliers.Where(x=>x.Id==requestId).FirstOrDefault();
            if (modifiedSupplier != null)
            {
                modifiedSupplier.Name = request.SupplierName;
                modifiedSupplier.Address = request.SupplierAddress;
                modifiedSupplier.Phone = request.SupplierPhone;
                context.Suppliers.Update(modifiedSupplier);
                context.SaveChanges();
                return modifiedSupplier.Id;
            }
            return default;
        }
        public int Delete(int requestId)
        {
            var deletedSupplier = context.Suppliers.Where(x => x.Id == requestId).FirstOrDefault();
            if (deletedSupplier != null)
            {
                context.Suppliers.Remove(deletedSupplier);
                context.SaveChanges();
                return deletedSupplier.Id;
            };
            return default;
        }
    }
}
