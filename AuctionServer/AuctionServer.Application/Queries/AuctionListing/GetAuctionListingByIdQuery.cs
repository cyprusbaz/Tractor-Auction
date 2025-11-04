using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.AuctionListing;

public class GetAuctionListingByIdQuery : IRequest<AuctionListingDto>
{
    public Guid Id { get; set; }
}