using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.Payment;

public record GetAllPaymentsQuery() : IRequest<List<PaymentDto>>;