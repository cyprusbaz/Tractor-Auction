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
    [HttpPost("Create")]
    public async Task<IActionResult> CreateAuctionItem(CreateAuctionItemCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
}