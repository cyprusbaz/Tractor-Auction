using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.User;

public class GetAllUsersQuery : IRequest<List<UserDto>>
{
    
}