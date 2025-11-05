using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.User;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.User;

public class GetAllUsersHandler : IRequestHandler<GetAllUsersQuery, List<UserDto>>
{
    private AuctionDbContext _context;

    public GetAllUsersHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<List<UserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var users = await _context.Users.Select(u => new UserDto
        {
            Id = u.Id,
            Name = u.Name,
            Surname = u.Surname,
            Email = u.Email,
            Username = u.Username,
            Address = u.Address,
            Phone = u.Phone,
        }).AsNoTracking().ToListAsync(cancellationToken);
        
        return users;
    }
}