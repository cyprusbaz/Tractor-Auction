namespace AuctionServer.Domain.Entities;

public class AuctionItem
{
    public Guid Id { get; set; }
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public int Mileage { get; set; }
    public string Color { get; set; }
    public string Engine { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    
    public string ImageUrl { get; set; }
    
    public Guid AuctionListingId { get; set; }
    public AuctionListing AuctionListing { get; set; }
    
    public ICollection<Bid>? Bids { get; set; }
    
    public Guid? PaymentId { get; set; }
    public Payment? Payment { get; set; }
    
}