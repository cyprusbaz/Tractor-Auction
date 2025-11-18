using Microsoft.AspNetCore.Http;

namespace AuctionServer.Core.Interfaces;

public interface IFileStorageService
{
    Task<string> SaveFileAsync(IFormFile file, string folder, string fileName,
        CancellationToken cancellationToken);
}