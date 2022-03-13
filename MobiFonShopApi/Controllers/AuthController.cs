using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MobiFonShopApi.Data;
using MobiFonShopApi.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MobiFonShopApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public AuthController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public class AuthVM
        {
            public string KorisnickoIme { get; set; }
            public string Lozinka { get; set; }
        }

        [HttpPost]
        public ActionResult Registracija ([FromBody] AuthVM vm)
        {
            KorisnickiNalog korisnicki = _dbContext.KorisnickiNalog.SingleOrDefault(x => x.KorisnickoIme == vm.KorisnickoIme);
            if (korisnicki != null)
                return BadRequest("Korisničko ime već postoji. ");

            korisnicki = new KorisnickiNalog
            {
                KorisnickoIme = vm.KorisnickoIme,
                Lozinka = vm.Lozinka
            };

            _dbContext.Add(korisnicki);
            _dbContext.SaveChanges();

            return Ok(korisnicki.Lozinka);

        }

        [HttpPost]
        public ActionResult Login([FromBody] AuthVM vm)
        {
            KorisnickiNalog korisnik = _dbContext.KorisnickiNalog.SingleOrDefault(x => x.KorisnickoIme == vm.KorisnickoIme && x.Lozinka == vm.Lozinka);
            if (korisnik == null)
                return BadRequest("Pogrešno korisničko ime i/ili lozinka");

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(

                issuer: "https://localhost:44356",
                audience: "https://localhost:44356",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: signingCredentials
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = tokenString });

           

        }

        
    }
}
