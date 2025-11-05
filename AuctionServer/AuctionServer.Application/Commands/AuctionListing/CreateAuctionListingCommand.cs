using MediatR;

namespace AuctionServer.Core.Commands.AuctionListing;

public class CreateAuctionListingCommand : IRequest<Guid>
{
    public string Name { get; set; }
    
    public DateTime StartDate { get; set; }
    
    public DateTime EndDate { get; set; }
    
    public Guid UserId { get; set; }
}