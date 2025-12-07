using AuctionServer.Core.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace AuctionServer.Core.Commands.AuctionItem;

public record UpdateAuctionItemCommand(Guid Id, string Brand, string Model, int Year, int Mileage, string Color, string Engine,
    string Description, string Attachment,  decimal Price, Guid AuctionListingId) : IRequest<Guid>;