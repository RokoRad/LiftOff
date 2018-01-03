using System;
using System.Web.Http;
using LiftOff.Domain.Commands;
using System.Threading.Tasks;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("weather")]
    public class WeatherController : ApiController
    {
        private readonly GetWeatherCommand _getWeatherCommand;

        public WeatherController()
        {
            _getWeatherCommand = new GetWeatherCommand();
        }

        [HttpGet]
        [Route("get-weather")]
        public Task<string> GetWeather(string lat, string lon) {

            return _getWeatherCommand.Execute(lat, lon);
        }

        [HttpGet]
        [Route("get-five-day")]
        public string GetFiveDayForecast(string lat, string lon)
        {
            return "";
        }
    }
}
