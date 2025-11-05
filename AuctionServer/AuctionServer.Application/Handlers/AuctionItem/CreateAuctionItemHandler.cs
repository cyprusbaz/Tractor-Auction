using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Commands.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class CreateAuctionItemHandler : IRequestHandler<CreateAuctionItemCommand, Guid>
{
    private AuctionDbContext _context;

    public CreateAuctionItemHandler(AuctionDbContext auctionDbContext)
    {
        _context = auctionDbContext;
    }

    public async Task<Guid> Handle(CreateAuctionItemCommand request, CancellationToken cancellationToken)
    {
        var item = new Domain.Entities.AuctionItem()
        {
            Id = Guid.NewGuid(),
            Brand = request.Brand,
            Model = request.Model,
            Year = request.Year,
            Mileage = request.Mileage,
            Color = request.Color,
            Engine = request.Engine,
            Description = request.Description,
            Price = request.Price,
            AuctionListingId = request.AuctionListingId,

        };
        await  _context.AuctionItems.AddAsync(item, cancellationToken);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        
        return item.Id;
    }
}