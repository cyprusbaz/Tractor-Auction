using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.Payment;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.Payment;

public class GetAllPaymentsHandler : IRequestHandler<GetAllPaymentsQuery, List<PaymentDto>>
{
    private AuctionDbContext _context;

    public GetAllPaymentsHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<List<PaymentDto>> Handle(GetAllPaymentsQuery request, CancellationToken cancellationToken)
    {
        var list = await _context.Payments.Select(p => new PaymentDto
        {
            Id = p.Id,
            Amount = p.Amount,
            Date = p.Date,
            Status = p.Status,
            UserId = p.UserId,
            AuctionItemId = p.AuctionItemId,
        }).ToListAsync(cancellationToken);
        
        return list;
    }
}