using MediatR;

namespace AuctionServer.Core.Commands.Payment;

public record CreatePaymentCommand(decimal Amount, Guid AuctionItemId, Guid UserId): IRequest<Guid>;