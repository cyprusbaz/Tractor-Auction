using MediatR;

namespace AuctionServer.Core.Commands.Payment;

public record DeletePaymentCommand(Guid Id): IRequest<Unit>;