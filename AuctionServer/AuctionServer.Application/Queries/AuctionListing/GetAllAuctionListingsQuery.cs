using AuctionServer.Core.Dtos;
using MediatR;

namespace AuctionServer.Core.Queries.AuctionListing;

public record GetAllAuctionListingsQuery() : IRequest<List<AuctionListingDto>>;