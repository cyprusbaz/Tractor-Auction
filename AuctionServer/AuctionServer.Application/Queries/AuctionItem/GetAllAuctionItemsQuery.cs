using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.AuctionItem;

public class GetAllAuctionItemsQuery : IRequest<List<AuctionItemDto>>
{
    
}