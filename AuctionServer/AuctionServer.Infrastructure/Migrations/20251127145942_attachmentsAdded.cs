using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuctionServer.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class attachmentsAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Attachment",
                table: "AuctionItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Attachment",
                table: "AuctionItems");
        }
    }
}
