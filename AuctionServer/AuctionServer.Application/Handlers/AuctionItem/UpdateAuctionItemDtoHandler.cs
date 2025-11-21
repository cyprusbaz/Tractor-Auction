using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Dtos;
using AuctionServer.Core.Interfaces;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class UpdateAuctionItemDtoHandler : IRequestHandler<UpdateAuctionItemCommand, Guid>
{
    private AuctionDbContext _context;

    public UpdateAuctionItemDtoHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(UpdateAuctionItemCommand request, CancellationToken cancellationToken)
    {
        var item = await _context.AuctionItems.Where(i => i.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

        if (item is null)
        {
            throw new Exception("There's no auction item with this Id");
        }
        
        item.Brand = request.Brand;
        item.Model = request.Model;
        item.Year = request.Year;
        item.Mileage = request.Mileage;
        item.Color = request.Color;
        item.Engine = request.Engine;
        item.Description = request.Description;
        item.Price = request.Price;
        item.AuctionListingId = request.AuctionListingId;
        
        _context.AuctionItems.Update(item);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return item.Id;
    }
}