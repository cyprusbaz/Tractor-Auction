using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.AuctionItem;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class GetAuctionItemByIdHandler : IRequestHandler<GetAuctionItemByIdQuery, AuctionItemDto>
{
    private AuctionDbContext _auctionDbContext;

    public GetAuctionItemByIdHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<AuctionItemDto> Handle(GetAuctionItemByIdQuery request, CancellationToken cancellationToken)
    {
        var item =  await _auctionDbContext.AuctionItems.Select(a => new AuctionItemDto
        {
            Id = a.Id,
            Brand = a.Brand,
            Model = a.Model,
            Year = a.Year,
            Mileage = a.Mileage,
            Color = a.Color,
            Engine = a.Engine,
            Description = a.Description,
            Price = a.Price,
            ImageUrl = a.ImageUrl,
            AuctionListingId = a.AuctionListingId,
        }).FirstOrDefaultAsync(cancellationToken);

        if (item is null)
        {
            throw new Exception("This item does not exist");
        }
        
        return item;
    }
}