using AuctionServer.Domain.Enums;

namespace AuctionServer.Domain.Entities;

public class Payment
{
    public Guid Id { get; set; }
    public float Amount { get; set; }
    public DateTime Date { get; set; }
    public Status Status { get; set; }
    
    public Guid AuctionItemId { get; set; }
    public AuctionItem AuctionItem { get; set; }
    
    public Guid UserId { get; set; }
    public User User { get; set; }
}