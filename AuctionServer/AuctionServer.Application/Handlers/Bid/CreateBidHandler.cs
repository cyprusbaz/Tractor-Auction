using AuctionServer.Core.Commands.Bid;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Bid;

public class CreateBidHandler : IRequestHandler<CreateBidCommand, Guid>
{
    private AuctionDbContext _context;

    public CreateBidHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(CreateBidCommand request, CancellationToken cancellationToken)
    {
        var bid = new Domain.Entities.Bid
        {
            Id = Guid.NewGuid(),
            Amount = request.Amount,
            Timestamp = DateTime.UtcNow,
            isWinner = false,
            AuctionItemId = request.AuctionItemId,
            BidderId = request.BidderId,
        };
        
        _context.Bids.Add(bid);
        await _context.SaveChangesAsync(cancellationToken);
        
        return bid.Id;
    }
}