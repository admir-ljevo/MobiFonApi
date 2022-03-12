using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobiFonShopApi.Helpers
{
    public class Config
    {
        public static string AplikacijURL = "https://localhost:44356/";

        public static string Slike => "images/";
        public static string SlikeURL => AplikacijURL + Slike;
        public static string SlikeFolder => "wwwroot/" + Slike;
    }
}
