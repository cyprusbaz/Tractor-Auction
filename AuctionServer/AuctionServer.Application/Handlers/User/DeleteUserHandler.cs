using AuctionServer.Core.Commands.User;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.User;

public class DeleteUserHandler : IRequestHandler<DeleteUserCommand, Unit>
{
    private AuctionDbContext auctionDbContext;

    public DeleteUserHandler(AuctionDbContext auctionDbContext)
    {
        this.auctionDbContext = auctionDbContext;
    }

    public async Task<Unit> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
    {
        var user = await auctionDbContext.Users.FindAsync(request.Id);

        if (user is null)
        {
            throw new Exception("User not found");
        }
        
        auctionDbContext.Users.Remove(user);
        await auctionDbContext.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}