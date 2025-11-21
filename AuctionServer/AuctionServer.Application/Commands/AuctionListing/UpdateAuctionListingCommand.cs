using MediatR;

namespace AuctionServer.Core.Commands.AuctionListing;

public record UpdateAuctionListingCommand(Guid Id, string Name, DateTime StartDate, DateTime EndDate) : IRequest<Unit>;