using Microsoft.EntityFrameworkCore.Migrations;

namespace MobiFonShopApi.Migrations
{
    public partial class v7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Detaljno",
                table: "Telefon",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "FiksnaCijena",
                table: "Telefon",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Detaljno",
                table: "Telefon");

            migrationBuilder.DropColumn(
                name: "FiksnaCijena",
                table: "Telefon");
        }
    }
}
