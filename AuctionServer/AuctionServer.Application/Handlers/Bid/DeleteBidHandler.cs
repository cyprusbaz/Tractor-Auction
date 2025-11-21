using AuctionServer.Core.Commands.Bid;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Bid;

public class DeleteBidHandler : IRequestHandler<DeleteBidCommand, Unit>
{
    private AuctionDbContext _context;

    public DeleteBidHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(DeleteBidCommand request, CancellationToken cancellationToken)
    {
        var bid = await _context.Bids.FindAsync(request.Id, cancellationToken);

        if (bid is null)
        {
            throw new Exception("Couldn't find Bid");
        }
        
        _context.Bids.Remove(bid);
        await _context.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}