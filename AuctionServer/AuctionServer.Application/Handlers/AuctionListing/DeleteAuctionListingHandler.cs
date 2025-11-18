using AuctionServer.Core.Commands.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.AuctionListing;

public class DeleteAuctionListingHandler : IRequestHandler<DeleteAuctionListingCommand, Unit>
{
    private AuctionDbContext _auctionDbContext;

    public DeleteAuctionListingHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<Unit> Handle(DeleteAuctionListingCommand request, CancellationToken cancellationToken)
    {
        var item = await _auctionDbContext.AuctionListings.FindAsync(request.Id, cancellationToken);

        if (item is null)
        {
            throw new Exception("Cannot find auction listing");
        }
        
        _auctionDbContext.AuctionListings.Remove(item);
        
        await _auctionDbContext.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}