using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.AuctionItem;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class GetAllAuctionItemsByListingIdHandler : IRequestHandler<GetAllAuctionItemsByListingIdQuery, List<AuctionItemDto>>
{
    private AuctionDbContext _auctionDbContext;

    public GetAllAuctionItemsByListingIdHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<List<AuctionItemDto>> Handle(GetAllAuctionItemsByListingIdQuery request, CancellationToken cancellationToken)
    {
        var listing = await _auctionDbContext.AuctionListings.Where(l => l.Id == request.ListingId).FirstOrDefaultAsync(cancellationToken);

        if (listing is null)
        {
            throw new Exception("There is no listing with this Id");
        }
        
        var items = await _auctionDbContext.AuctionItems.Select(i => new AuctionItemDto
        { 
            Id = i.Id,
            Brand = i.Brand,
            Model = i.Model,
            Year = i.Year,
            Mileage = i.Mileage,
            Color = i.Color,
            Engine = i.Engine,
            Description = i.Description,
            Price = i.Price,
            ImageUrl = i.ImageUrl,
            AuctionListingId = i.AuctionListingId,
        }).Where(a => a.AuctionListingId == listing.Id).ToListAsync(cancellationToken);

        return items;
    }
}