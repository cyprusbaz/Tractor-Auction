using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.AuctionItem;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class GetAllAuctionItemsHandler : IRequestHandler<GetAllAuctionItemsQuery, List<AuctionItemDto>>
{
    private AuctionDbContext _auctionDbContext;

    public GetAllAuctionItemsHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<List<AuctionItemDto>> Handle(GetAllAuctionItemsQuery request, CancellationToken cancellationToken)
    {
        var auctionItems =  await _auctionDbContext.AuctionItems.Select(a => new AuctionItemDto
        {
            Id = a.Id,
            Brand = a.Brand,
            Model = a.Model,
            Year = a.Year,
            Mileage = a.Mileage,
            Color = a.Color,
            Engine = a.Engine,
            Description = a.Description,
            Attachment = a.Attachment,
            Price = a.Price,
            ImageUrl = a.ImageUrl,
            AuctionListingId = a.AuctionListingId,
        }).AsNoTracking().ToListAsync(cancellationToken);
        
        return auctionItems;
    }
}