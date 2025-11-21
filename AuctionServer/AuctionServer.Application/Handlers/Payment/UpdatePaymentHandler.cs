using AuctionServer.Core.Commands.Payment;
using AuctionServer.Infrastructure;
using MediatR;

namespace AuctionServer.Core.Handlers.Payment;

public class UpdatePaymentHandler : IRequestHandler<UpdatePaymentCommand, Unit>
{
   private AuctionDbContext _context;

   public UpdatePaymentHandler(AuctionDbContext context)
   {
       _context = context;
   }

   public async Task<Unit> Handle(UpdatePaymentCommand request, CancellationToken cancellationToken)
    {
        var payment = await _context.Payments.FindAsync(request.Id,  cancellationToken);

        if (payment is null)
        {
            throw new KeyNotFoundException("payment not found");
        }

        payment.Amount = request.Amount;
        payment.Status = request.Status;
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return Unit.Value;
    }
}