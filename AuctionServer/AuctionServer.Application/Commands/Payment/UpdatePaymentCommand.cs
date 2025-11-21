using AuctionServer.Domain.Enums;
using MediatR;

namespace AuctionServer.Core.Commands.Payment;

public record UpdatePaymentCommand(Guid Id, decimal Amount, Status Status) : IRequest<Unit>;