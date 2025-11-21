using System.Windows.Input;
using MediatR;

namespace AuctionServer.Core.Commands.Bid;

public record CreateBidCommand(decimal Amount, Guid BidderId, Guid AuctionItemId) : IRequest<Guid>;