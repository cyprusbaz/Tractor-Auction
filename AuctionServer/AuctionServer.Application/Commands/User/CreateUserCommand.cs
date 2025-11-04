using MediatR;

namespace AuctionServer.Core.Commands.User;

public class CreateUserCommand : IRequest<Guid>
{
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Username { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
}