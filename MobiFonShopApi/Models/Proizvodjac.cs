using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.Models
{
    public class Proizvodjac
    {
        [Key]
        public int Id { get; set; }
        public string opis { get; set; }
    }
}
