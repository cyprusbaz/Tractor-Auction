using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.Bid;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.Bid;

public class GetAllBidsHandler : IRequestHandler<GetAllBidsQuery, List<BidDto>>
{
    private AuctionDbContext _context;

    public GetAllBidsHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<List<BidDto>> Handle(GetAllBidsQuery request, CancellationToken cancellationToken)
    {
        var list = await _context.Bids.Select(b => new BidDto
        {
            Id = b.Id,
            Amount = b.Amount,
            BidderId = b.BidderId,
            Timestamp = b.Timestamp,
            AuctionItemId = b.AuctionItemId,
            isWinner = b.isWinner,
        }).ToListAsync(cancellationToken);
        
        return list;
    }
}