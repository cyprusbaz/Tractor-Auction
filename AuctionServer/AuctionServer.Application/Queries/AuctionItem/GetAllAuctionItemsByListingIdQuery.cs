using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.AuctionItem;

public record GetAllAuctionItemsByListingIdQuery(Guid ListingId): IRequest<List<AuctionItemDto>>;