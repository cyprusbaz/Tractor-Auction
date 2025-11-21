using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.Bid;

public record GetBidByIdQuery(Guid Id) : IRequest<BidDto>;