using AuctionServer.Core.Commands.Payment;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Payment;

public class DeletePaymentHandler : IRequestHandler<DeletePaymentCommand, Unit>
{
    private AuctionDbContext _context;

    public DeletePaymentHandler(AuctionDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(DeletePaymentCommand request, CancellationToken cancellationToken)
    {
        var payment = await _context.Payments.FindAsync(request.Id, cancellationToken);

        if (payment is null)
        {
            throw new Exception("Payment not found");
        }
        
        _context.Payments.Remove(payment);
        await _context.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}