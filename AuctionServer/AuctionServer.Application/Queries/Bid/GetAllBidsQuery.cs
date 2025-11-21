using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.Bid;

public record GetAllBidsQuery() : IRequest<List<BidDto>>;