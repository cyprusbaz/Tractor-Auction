namespace AuctionServer.Domain.Entities;

public class Bid
{
    public Guid Id { get; set; }
    public float Amount { get; set; }
    public DateTime Timestamp { get; set; }
    public bool isWinner { get; set; }
    
    public Guid? BidderId { get; set; }
    public User? Bidder { get; set; }
    
    public Guid? AuctionItemId { get; set; }
    public AuctionItem? AuctionItem { get; set; }
}