namespace AuctionServer.Domain.Entities;

public class AuctionListing
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    
    public Guid UserId { get; set; }
    public User User { get; set; }
    
    public ICollection<AuctionItem>? AuctionItems { get; set; } = new List<AuctionItem>();
}