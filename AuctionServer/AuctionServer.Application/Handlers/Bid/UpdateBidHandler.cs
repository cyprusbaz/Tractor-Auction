using AuctionServer.Core.Commands.Bid;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Bid;

public class UpdateBidHandler : IRequestHandler<UpdateBidCommand, Unit>
{
    private AuctionDbContext _context;

    public UpdateBidHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(UpdateBidCommand request, CancellationToken cancellationToken)
    {
        var bid = await _context.Bids.FindAsync(request.Id);

        if (bid == null)
        {
            throw new Exception("Bid not found");
        }
        
        bid.Amount = request.Amount;
        bid.Timestamp = DateTime.Now;
        bid.isWinner = request.IsWinner;
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}