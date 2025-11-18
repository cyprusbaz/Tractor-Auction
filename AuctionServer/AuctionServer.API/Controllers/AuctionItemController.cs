using AuctionServer.Core.Commands.AuctionItem;
using AuctionServer.Core.Queries.AuctionItem;
using Microsoft.AspNetCore.Mvc;

namespace AuctionServer.API.Controllers;

public class AuctionItemController : BaseController
{
    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll([FromQuery]GetAllAuctionItemsQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }

    [HttpGet("GetByListingId")]
    public async Task<IActionResult> GetByListingId([FromQuery]GetAllAuctionItemsQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }

    [HttpGet("GetById")]
    public async Task<IActionResult> GetById([FromQuery] GetAuctionItemByIdQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }
    
    [HttpPost("Create")]
    public async Task<IActionResult> CreateAuctionItem(CreateAuctionItemCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }

    [HttpPut("Update")]
    public async Task<IActionResult> UpdateAuctionItem(UpdateAuctionItemCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }

    [HttpDelete("Delete")]
    public async Task<IActionResult> DeleteAuctionItem(DeleteAuctionItemCommnad command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
    
}