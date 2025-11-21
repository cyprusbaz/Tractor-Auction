using MediatR;

namespace AuctionServer.Core.Commands.User;

public record UpdateUserCommand(Guid Id, string Surname, string Name, string Email, string Username, string Address, string Phone) : IRequest<Unit>;