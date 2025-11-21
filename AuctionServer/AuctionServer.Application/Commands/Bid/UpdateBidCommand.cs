using MediatR;

namespace AuctionServer.Core.Commands.Bid;

public record UpdateBidCommand(Guid Id ,decimal Amount, DateTime TimeStamp, bool IsWinner) : IRequest<Unit>;