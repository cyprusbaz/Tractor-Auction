using AuctionServer.Core.Commands.User;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.User;

public class UpdateUserHandler : IRequestHandler<UpdateUserCommand, Unit>
{
    private AuctionDbContext _context;

    public UpdateUserHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async  Task<Unit> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    { 
        var user = await _context.Users.FindAsync(request.Id , cancellationToken);

        if (user is null)
        {
            throw new Exception("User not found");
        }


        user.Name = request.Name;
        user.Surname = request.Surname;
        user.Email = request.Email;
        user.Username = request.Username;
        user.Address = request.Address;
        user.Phone = request.Phone;

        _context.Users.Update(user);

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}