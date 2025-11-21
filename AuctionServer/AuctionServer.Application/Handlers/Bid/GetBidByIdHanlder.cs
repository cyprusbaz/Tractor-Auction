using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.Bid;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.Bid;

public class GetBidByIdHanlder : IRequestHandler<GetBidByIdQuery, BidDto>
{
    private AuctionDbContext _auctionDbContext;

    public GetBidByIdHanlder(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<BidDto> Handle(GetBidByIdQuery request, CancellationToken cancellationToken)
    {
        var bid = await _auctionDbContext.Bids.Select(b => new BidDto
        {
            Id = b.Id,
            Amount = b.Amount,
            BidderId = b.BidderId,
            Timestamp = b.Timestamp,
            AuctionItemId = b.AuctionItemId,
            isWinner = b.isWinner,
        }).Where(b => b.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

        if (bid is null)
        {
            throw new KeyNotFoundException("Bid not found");
        }
        return bid ;
    }
}