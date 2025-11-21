using AuctionServer.Core.Dtos;
using AuctionServer.Core.Queries.Payment;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.Payment;

public class GetPaymentByIdHandler : IRequestHandler<GetPaymentByIdQuery, PaymentDto>
{
    private AuctionDbContext _context;

    public GetPaymentByIdHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<PaymentDto> Handle(GetPaymentByIdQuery request, CancellationToken cancellationToken)
    {
        var payment = await _context.Payments.Select(p => new PaymentDto
        {
            Id = p.Id,
            Amount = p.Amount,
            Date = p.Date,
            Status = p.Status,
            UserId = p.UserId,
            AuctionItemId = p.AuctionItemId,
        }).Where(p => p.Id == request.Id).FirstOrDefaultAsync(cancellationToken);
        
        return payment;
    }
}