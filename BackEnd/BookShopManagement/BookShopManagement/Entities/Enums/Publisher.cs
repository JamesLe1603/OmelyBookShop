using System.ComponentModel;

namespace BookShopManagement.Entities.Enums
{
    public enum Publisher
    {
        [Description("Penguin Random House")]
        PenguinRandomHouse = 1,
        [Description("Harper Collins")]
        HarperCollins = 2,
        [Description("OUP")]
        OUP = 3,
        [Description("CUP")]
        CUP = 4,
        [Description("Kim Đồng")]
        KimDong = 5,
        [Description("Giáo Dục Việt Nam")]
        GiaoDucVietNam = 6,
        [Description("Alpha Books")]
        Alphabooks = 7,
        [Description("Apress")]
        Apress = 8
    }
}
