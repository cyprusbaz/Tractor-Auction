using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.User;

public record GetUserByIdQuery(Guid Id) : IRequest<UserDto>;