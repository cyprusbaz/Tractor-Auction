using AuctionServer.Domain.Entities;

namespace AuctionServer.Core.Dtos;

public class AuctionListingDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public ICollection<AuctionItemDto> AuctionItems { get; set; } = new List<AuctionItemDto>();
}