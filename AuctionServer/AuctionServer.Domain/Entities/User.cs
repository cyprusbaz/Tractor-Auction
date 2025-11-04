namespace AuctionServer.Domain.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Username { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public ICollection<AuctionListing>? AuctionListings { get; set; } = new List<AuctionListing>();
    public ICollection<Bid>? Bids { get; set; } = new List<Bid>();
    public ICollection<Payment>? Payments { get; set; } = new List<Payment>();
}