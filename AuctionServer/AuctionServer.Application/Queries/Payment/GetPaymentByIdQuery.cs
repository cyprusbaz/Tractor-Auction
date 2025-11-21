using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.Payment;

public record GetPaymentByIdQuery(Guid Id) : IRequest<PaymentDto>;