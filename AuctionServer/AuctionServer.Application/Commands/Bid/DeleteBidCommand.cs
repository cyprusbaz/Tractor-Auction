using MediatR;

namespace AuctionServer.Core.Commands.Bid;

public record DeleteBidCommand(Guid Id) : IRequest<Unit>;