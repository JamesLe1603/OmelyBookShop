using System.ComponentModel;

namespace BookShopManagement.Entities.Enums
{
    public enum Author
    {
        [Description("William Shakespreare")]
        WilliamShakespeare = 1,
        [Description("Jane Austen")]
        JaneAusten = 2,
        [Description("Loy Tolstoy")]
        LoyTolstoy = 3,
        [Description("George Owell")]
        GeorgeOwell = 4,
        [Description("Haruki Murakami")]
        HarukiMurakami = 5,
        [Description("Stephen King")]
        StephenKing = 6,
        [Description("Nguyễn Nhật Ánh")]
        NguyenNhatAnh = 7,
        [Description("Nam Cao")]
        NamCao = 8,
        [Description("Nguyễn Du")]
        NguyenDu = 9
    }
}
