using AuctionServer.Core.Commands.Bid;
using AuctionServer.Core.Commands.Payment;
using AuctionServer.Domain.Enums;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Payment;

public class CreatePaymentHandler : IRequestHandler<CreatePaymentCommand, Guid>
{
    private AuctionDbContext _context;

    public CreatePaymentHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(CreatePaymentCommand request, CancellationToken cancellationToken)
    {
        var payment = new Domain.Entities.Payment
        {
            Id = Guid.NewGuid(),
            Amount = request.Amount,
            Date = DateTime.Now,
            Status = Status.pending,
            AuctionItemId = request.AuctionItemId,
            UserId = request.UserId,
        };
        
        _context.Payments.Add(payment);
        await _context.SaveChangesAsync(cancellationToken);
        
        return payment.Id;
    }
}