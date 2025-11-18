using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Interfaces;
using AuctionServer.Infrastructure;
using MediatR;
using Microsoft.AspNetCore.Hosting;


namespace AuctionServer.Core.Handlers.AuctionItem;

public class CreateAuctionItemHandler : IRequestHandler<CreateAuctionItemCommand, Guid>
{
    private AuctionDbContext _context;
    private readonly IFileStorageService _fileStorageService;

    public CreateAuctionItemHandler(AuctionDbContext auctionDbContext, IFileStorageService fileStorageService)
    {
        _context = auctionDbContext;
        _fileStorageService = fileStorageService;
    }

    public async Task<Guid> Handle(CreateAuctionItemCommand request, CancellationToken cancellationToken)
    {
        
        if (request.Image is null || request.Image.Length == 0)
            throw new Exception("Image is empty");
        
        var fileName = $"{request.Image.FileName}";
        var imageUrl = await _fileStorageService.SaveFileAsync(request.Image, "images", fileName, cancellationToken);
        var item = new Domain.Entities.AuctionItem()
        {
            Id = Guid.NewGuid(),
            Brand = request.Brand,
            Model = request.Model,
            Year = request.Year,
            Mileage = request.Mileage,
            Color = request.Color,
            Engine = request.Engine,
            Description = request.Description,
            Price = request.Price,
            ImageUrl = imageUrl,
            AuctionListingId = request.AuctionListingId,

        };
        await  _context.AuctionItems.AddAsync(item, cancellationToken);
        
        await _context.SaveChangesAsync(cancellationToken);
        
        
        return item.Id;
    }
}