using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.ViewModels
{
    public class TelefonAddImageVM
    {
        public IFormFile slika_telefona { set; get; }
    }
}
