using AuctionServer.Core.Commands.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.AuctionListing;

public class UpdateAuctionListingHandler : IRequestHandler<UpdateAuctionListingCommand, Unit>
{
    private AuctionDbContext _auctionDbContext;

    public UpdateAuctionListingHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<Unit> Handle(UpdateAuctionListingCommand request, CancellationToken cancellationToken)
    {
        var listing = await _auctionDbContext.AuctionListings.FindAsync(request.Id, cancellationToken);

        if (listing is null)
        {
            throw new Exception("Couldn't find auction listing");
        }
        
        listing.Name = request.Name;
        listing.StartDate = request.StartDate;
        listing.EndDate = request.EndDate;
        
        _auctionDbContext.AuctionListings.Update(listing);
        
        await _auctionDbContext.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}