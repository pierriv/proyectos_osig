using ApiService.Config;
using ApiService.Service.impl;
using ApiService.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ApiService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : Controller
    {
        private readonly AppSettings _mySettings;
        public ApiController(IOptions<AppSettings> settings)
        {
            _mySettings = settings.Value;
        }

        [HttpGet]
        public ActionResult get()
        {
            IExcel excel = new Excel(_mySettings);
            return Ok(excel.leer());
        }

    }
}
