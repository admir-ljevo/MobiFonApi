using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MobiFonShopApi.Data;
using MobiFonShopApi.Helpers;
using MobiFonShopApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProizvodjacController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ProizvodjacController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public class ProizvodjacAddVM
        {
            public string opis { get; set; }
        }
        [HttpPost]
        public ActionResult Add ([FromBody] ProizvodjacAddVM proizvodjac)
        {

            var provjera = _dbContext.Proizvodjac.SingleOrDefault(x => x.opis.ToLower() == proizvodjac.opis.ToLower());
            if (provjera != null)
                return BadRequest("Već postoji proizvođač. ");

            Proizvodjac novi = new Proizvodjac
            {
                opis = proizvodjac.opis
            };



            _dbContext.Add(novi);
            _dbContext.SaveChanges();

            return Ok(novi.Id);
        }

        [HttpGet]
        public List<CmbStavke> GetAll()
        {
            var data = _dbContext.Proizvodjac.OrderBy(s => s.opis).Select(s => new CmbStavke
            {
                id = s.Id,
                opis = s.opis
            }).AsQueryable();

            return data.Take(100).ToList();
        }

    }
}
