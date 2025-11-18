using MediatR;
using Microsoft.AspNetCore.Http;
namespace AuctionServer.Core.Commands.AuctionItem;

public record CreateAuctionItemCommand(string Brand, string Model, int Year, int Mileage, string Color, string Engine,
    string Description, decimal Price, IFormFile Image, Guid AuctionListingId) : IRequest<Guid>;
