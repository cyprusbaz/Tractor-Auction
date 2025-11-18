using MediatR;

namespace AuctionServer.Core.Commands.AuctionListing;

public record DeleteAuctionListingCommand(Guid Id) : IRequest<Unit>;