using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.ViewModels
{
    public class TelefonUpdateVM
    {
        public int ProizvodjacId { get; set; }
        public string Model { get; set; }
        public string Kamera { get; set; }
        public string Procesor { get; set; }
        public string Ram  { get; set; }
        public string Memorija { get; set; }
        public string Ekran { get; set; }
        public bool Garancija { get; set; }
        public int MjeseciGarancije { get; set; }
        public bool FiksnaCijena { get; set; }
        public string Detaljno { get; set; }
        public bool Novo { get; set; }
        public float Cijena { get; set; }
    }
}
