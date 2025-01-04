using System.ComponentModel;

namespace BookShopManagement.Entities.Enums
{
    public enum Genre
    {
        [Description("Tiểu thuyết")]
        Fiction = 1,
        [Description("Phi tiểu thuyết")]
        NonFiction = 2,
        [Description("Bí ẩn")]
        Mystery = 3,
        [Description("Giả tưởng")]
        Fantasy = 4,
        [Description("Lãng mạn")]
        Romance = 5,
        [Description("Khoa học viễn tưởng")]
        ScienceFiction = 6,
        [Description("Tiểu sử")]
        Biography = 7,
        [Description("Lịch sử")]
        History = 8,
        [Description("Trẻ em")]
        Children = 9
    }
}
