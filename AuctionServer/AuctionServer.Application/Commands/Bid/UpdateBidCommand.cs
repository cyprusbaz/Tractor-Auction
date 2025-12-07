using MediatR;

namespace AuctionServer.Core.Commands.Bid;

public record UpdateBidCommand(Guid Id ,decimal Amount, bool IsWinner) : IRequest<Unit>;