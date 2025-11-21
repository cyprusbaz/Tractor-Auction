using AuctionServer.Core.Commands.Payment;
using AuctionServer.Core.Queries.Payment;
using Microsoft.AspNetCore.Mvc;

namespace AuctionServer.API.Controllers;

public class PaymentController : BaseController
{
    [HttpPost("Create")]
    public async Task<IActionResult> Create(CreatePaymentCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll([FromQuery] GetAllPaymentsQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }
    [HttpGet("GetById")]
    public async Task<IActionResult> GetAll([FromQuery] GetPaymentByIdQuery query)
    {
        var result = await Mediator.Send(query);
        return Ok(result);
    }
    [HttpDelete("Delete")]
    public async Task<IActionResult> DeleteUser(DeletePaymentCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
    [HttpPut("Update")]
    public async Task<IActionResult> UpdateUser(UpdatePaymentCommand command)
    {
        var result = await Mediator.Send(command);
        return Ok(result);
    }
}