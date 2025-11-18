using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Dtos;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class DeleteAuctionItemHandler : IRequestHandler<DeleteAuctionItemCommnad, Unit>
{
    private AuctionDbContext _auctionDbContext;

    public DeleteAuctionItemHandler(AuctionDbContext auctionDbContext)
    {
        _auctionDbContext = auctionDbContext;
    }

    public async Task<Unit> Handle(DeleteAuctionItemCommnad request, CancellationToken cancellationToken)
    {
        var item = await _auctionDbContext.AuctionItems.FindAsync(request.Id, cancellationToken);

        if (item is null)
        {
            throw new Exception($"AuctionItem with ID {request.Id} not found.");
        }
        //to be done
        _auctionDbContext.AuctionItems.Remove(item);
        
        await _auctionDbContext.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}