using MediatR;

namespace AuctionServer.Core.Commands.AuctionItem;

public class CreateAuctionItemCommand : IRequest<Guid>
{
    public Guid Id { get; set; }
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public int Mileage { get; set; }
    public string Color { get; set; }
    public string Engine { get; set; }
    public string Description { get; set; }
    public float Price { get; set; }
    
    public Guid AuctionListingId { get; set; }
}