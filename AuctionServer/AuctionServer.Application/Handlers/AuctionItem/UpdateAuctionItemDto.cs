using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Dtos;
using AuctionServer.Core.Interfaces;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AuctionServer.Core.Handlers.AuctionItem;

public class UpdateAuctionItemDto : IRequestHandler<UpdateAuctionItemCommand, AuctionItemDto>
{
    private AuctionDbContext _context;
    private readonly IFileStorageService _fileStorageService;

    public UpdateAuctionItemDto(AuctionDbContext context, IFileStorageService fileStorageService)
    {
        _context = context;
        _fileStorageService = fileStorageService;
    }

    public async Task<AuctionItemDto> Handle(UpdateAuctionItemCommand request, CancellationToken cancellationToken)
    {
        var item = await _context.AuctionItems.Where(i => i.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

        if (item is null)
        {
            throw new Exception("There's no auction item with this Id");
        }
        
        await  _context.AuctionItems.AddAsync(item, cancellationToken);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        return null;
    }
}