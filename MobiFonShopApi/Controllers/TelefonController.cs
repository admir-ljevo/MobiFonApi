﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobiFonShopApi.Data;
using MobiFonShopApi.Helpers;
using MobiFonShopApi.Models;
using MobiFonShopApi.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class TelefonController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TelefonController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("{id}")]
        public ActionResult<Telefon> Update([FromBody] TelefonUpdateVM vm, int id)
        {
            Telefon telefon;
            if (id == 0)
            {
                telefon = new Telefon
                {
                    Slika_telefona = Config.SlikeURL + "mobitel.jpg"
                };
                _dbContext.Add(telefon);
            }
            else
            {
                telefon = _dbContext.Telefon.Include(x => x.Proizvodjac).FirstOrDefault(x => x.Id == id);
                if (telefon == null)
                    return BadRequest("Telefon ne postoji. ");

            }
            telefon.ProizvodjacId = vm.ProizvodjacId;
            telefon.Model = vm.Model;
            telefon.Kamera = vm.Kamera;
            telefon.Procesor = vm.Procesor;
            telefon.Ram = vm.Ram;
            telefon.Memorija = vm.Memorija;
            telefon.Ekran = vm.Ekran;
            telefon.Garancija = vm.Garancija;
            telefon.MjeseciGarancije = vm.MjeseciGarancije;
            telefon.Novo = vm.Novo;
            telefon.Cijena = vm.Cijena;

            _dbContext.SaveChanges();

            return Ok(telefon);


        }


        [HttpPost("{id}")]
        public ActionResult Delete(int id)
        {
            Telefon telefon = _dbContext.Telefon.Find(id);
            if (telefon == null)
                return BadRequest("Pogrešan ID");

            _dbContext.Remove(telefon);
            _dbContext.SaveChanges();

            return Ok(telefon);


        }

        [HttpGet]
        public List<Telefon> GetAll()
        {
            return _dbContext.Telefon.Include(x => x.Proizvodjac).ToList();

        }
            

        [HttpPost("{id}")]
        public ActionResult AddImage (int id, [FromForm] TelefonAddImageVM vM)
        {
            try
            {
                Telefon telefon = _dbContext.Telefon.Include(x => x.Proizvodjac).SingleOrDefault(x => x.Id == id);
                if (telefon != null && vM.slika_telefona!=null)
                {
                    string ekstenzija = Path.GetExtension(vM.slika_telefona.FileName);
                    var filename = $"{Guid.NewGuid()}{ekstenzija}";
                    vM.slika_telefona.CopyTo(new FileStream(Config.SlikeFolder + filename, FileMode.Create));
                    telefon.Slika_telefona = Config.SlikeURL + filename;
                    _dbContext.SaveChanges();

                }

                return Ok(telefon);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message + "   " + ex.InnerException);
            }
        }

        [HttpGet]
        public List<Telefon> GetByProizvodjac(int id)
        {
            return _dbContext.Telefon.Include(x => x.Proizvodjac).Where(x => x.ProizvodjacId == id).ToList();
        }




    }
}
