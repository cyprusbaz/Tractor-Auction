using AuctionServer.Core.Commands.AuctionListing;
using AuctionServer.Core.Queries.AuctionListing;
using Microsoft.AspNetCore.Mvc;

namespace AuctionServer.API.Controllers;

public class AuctionListingController : BaseController
{
    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAllAuctionListings([FromQuery]GetAllAuctionListingsQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }
    [HttpGet("GetById")]
    public async Task<IActionResult> GetAuctionListingsById([FromQuery]GetAuctionListingByIdQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }
    [HttpPost("Create")]
    public async Task<IActionResult> CreateAuctionListing(CreateAuctionListingCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
    [HttpDelete("Delete/{id}")]
    public async Task<IActionResult> DeleteAuctionListingCommand([FromRoute] Guid id)
    {
        var command = new DeleteAuctionListingCommand(id);
        var result = await Mediator.Send(command);
        return Ok(result);
    }

    [HttpPut("Update")]
    public async Task<IActionResult> UpdateAuctionListingCommand([FromBody] UpdateAuctionListingCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
}