namespace AuctionServer.Core.Dtos;

public class BidDto
{
    public Guid Id { get; set; }
    public decimal Amount { get; set; }
    public DateTime Timestamp { get; set; }
    public bool isWinner { get; set; }
    public Guid? BidderId { get; set; }
    public Guid? AuctionItemId { get; set; }
}