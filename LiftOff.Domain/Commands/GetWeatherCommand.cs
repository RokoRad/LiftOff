using System.Net.Http;
using System.Threading.Tasks;

namespace LiftOff.Domain.Commands
{
    public class GetWeatherCommand
    {
        private readonly HttpClient _client;

        public GetWeatherCommand()
        {
            _client = new HttpClient();
        }

        public async Task<string> Execute(string lat, string lon)
        {
            var response = await _client.GetAsync("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=1970c2782afffe45126a6748228e5a33");

            return await response.Content.ReadAsStringAsync();
        }
    }
}
