using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.User;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.User;

public class GetUserByIdHandler : IRequestHandler<GetUserByIdQuery, UserDto>
{
    private AuctionDbContext _context;

    public GetUserByIdHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<UserDto> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
    {
        var user = await _context.Users.Select(u => new UserDto
        {
            Id = u.Id,
            Name = u.Name,
            Surname = u.Surname,
            Email = u.Email,
            Username = u.Username,
            Address = u.Address,
            Phone = u.Phone,
        }).Where(i => i.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            throw new Exception("Cannot find user");
        }
        
        return user;
    }
}