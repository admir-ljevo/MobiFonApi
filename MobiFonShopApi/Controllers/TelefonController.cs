using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MobiFonShopApi.Data;
using System;
using System.Collections.Generic;
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


    }
}
