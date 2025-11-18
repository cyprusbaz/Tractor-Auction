using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.AuctionItem;

public record GetAuctionItemByIdQuery(Guid Id) : IRequest<AuctionItemDto>;