using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionListing;

public class GetAuctionListingByIdHandler : IRequestHandler<GetAuctionListingByIdQuery, AuctionListingDto>
{
    
    private AuctionDbContext _context;

    public GetAuctionListingByIdHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<AuctionListingDto> Handle(GetAuctionListingByIdQuery request, CancellationToken cancellationToken)
    {

        var auction = await _context.AuctionListings.Select(a => new AuctionListingDto
        {
            Id = a.Id,
            Name = a.Name,
            StartDate = a.StartDate,
            EndDate = a.EndDate,
        }).Where(l => l.Id == request.Id).FirstOrDefaultAsync(cancellationToken);
        
        return auction;
    }
}