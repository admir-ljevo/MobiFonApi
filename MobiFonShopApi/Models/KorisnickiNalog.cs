using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MobiFonShopApi.Models
{

    public class KorisnickiNalog
    {
        [Key]
        public int Id { get; set; }
        public string KorisnickoIme { get; set; }
        [JsonIgnore]
        public string Lozinka { get; set; }
    }
}
