using AuctionServer.Domain.Enums;

namespace AuctionServer.Core.Dtos;

public class PaymentDto
{
    public Guid Id { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
    public Status Status { get; set; }
    
    public Guid AuctionItemId { get; set; }
    
    public Guid UserId { get; set; }
}