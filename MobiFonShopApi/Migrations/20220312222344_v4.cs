using Microsoft.EntityFrameworkCore.Migrations;

namespace MobiFonShopApi.Migrations
{
    public partial class v4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Cijena",
                table: "Telefon",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cijena",
                table: "Telefon");
        }
    }
}
