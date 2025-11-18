using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionListing;

public class GetAllAuctionListingsHandler : IRequestHandler<GetAllAuctionListingsQuery, List<AuctionListingDto>>
{
    private AuctionDbContext _auctionDbContext;

    public GetAllAuctionListingsHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<List<AuctionListingDto>> Handle(GetAllAuctionListingsQuery request, CancellationToken cancellationToken)
    {
        var list = await _auctionDbContext.AuctionListings.Select(a => new AuctionListingDto
        {
            Id = a.Id,
            Name = a.Name,
            StartDate = a.StartDate,
            EndDate = a.EndDate,
            AuctionItems = _auctionDbContext.AuctionItems.Select(ai => new AuctionItemDto
            {
                Brand = ai.Brand,
                Model = ai.Model,
                Year = ai.Year,
                Mileage = ai.Mileage,
                Color = ai.Color,
                Engine = ai.Engine,
                Description = ai.Description,
                Price = ai.Price,
                ImageUrl = ai.ImageUrl,
                
            }).Where(i => i.AuctionListingId == a.Id).ToList(),
        }).ToListAsync(cancellationToken);
        
        return list;
    }
}