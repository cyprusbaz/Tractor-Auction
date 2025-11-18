using System.Windows.Input;
using MediatR;

namespace AuctionServer.Core.Commands.User;

public record DeleteUserCommand(Guid Id) : IRequest<Unit>; 