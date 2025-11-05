using AuctionServer.Core.Commands.AuctionListing;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.AuctionListing;

public class CreateAuctionListingHandler : IRequestHandler<CreateAuctionListingCommand, Guid>
{
    private AuctionDbContext _context;

    public CreateAuctionListingHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(CreateAuctionListingCommand request, CancellationToken cancellationToken)
    {
        var user = new Domain.Entities.AuctionListing()
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            StartDate = request.StartDate,
            EndDate = request.EndDate,
            UserId = request.UserId,
        };
        
        await _context.AuctionListings.AddAsync(user, cancellationToken);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return user.Id;
    }
}