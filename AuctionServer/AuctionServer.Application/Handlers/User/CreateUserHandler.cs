using AuctionServer.Core.Commands.User;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.User;

public class CreateUserHandler : IRequestHandler<CreateUserCommand, Guid>
{
    private AuctionDbContext _context;

    public CreateUserHandler(AuctionDbContext context)
    {
        _context = context;
    }
    
    public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = new Domain.Entities.User()
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Surname = request.Surname,
            Email = request.Email,
            Password = request.Password,
            Username = request.Username,
            Address = request.Address,
            Phone = request.Phone,
        };
        
        await _context.Users.AddAsync(user, cancellationToken);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return user.Id;
    }
}