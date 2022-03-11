using Microsoft.EntityFrameworkCore.Migrations;

namespace MobiFonShopApi.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Telefon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProizvodjacId = table.Column<int>(type: "int", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kamera = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Procesor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ram = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Memorija = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ekran = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Garancija = table.Column<bool>(type: "bit", nullable: false),
                    MjeseciGarancije = table.Column<int>(type: "int", nullable: false),
                    Novo = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Telefon", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Telefon_Proizvodjac_ProizvodjacId",
                        column: x => x.ProizvodjacId,
                        principalTable: "Proizvodjac",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Telefon_ProizvodjacId",
                table: "Telefon",
                column: "ProizvodjacId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Telefon");
        }
    }
}
