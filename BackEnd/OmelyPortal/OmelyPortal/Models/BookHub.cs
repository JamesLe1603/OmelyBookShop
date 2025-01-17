using Microsoft.AspNetCore.SignalR;

namespace OmelyPortal.Models
{
    public class BookHub : Hub
    {
        public async Task NotifyUpdate (string message)
        {
            await Clients.All.SendAsync ("ReceiveMessage",message);
        }
    }
}
