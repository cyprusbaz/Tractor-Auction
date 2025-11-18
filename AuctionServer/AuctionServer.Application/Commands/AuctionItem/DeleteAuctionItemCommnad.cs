using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Commands.AuctionItem;

public record DeleteAuctionItemCommnad(Guid Id) : IRequest<Unit>;