using System.Net.Http;
using System.Threading.Tasks;

namespace LiftOff.Domain.Commands
{
	public class GetFiveDayForecastCommand
	{
		private readonly HttpClient _client;

		public GetFiveDayForecastCommand()
		{
			_client = new HttpClient();
		}

		public async Task<string> Execute(string lat, string lon, string units)
		{
			var response = await _client.GetAsync("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=" + units + "&APPID=1970c2782afffe45126a6748228e5a33");

			return await response.Content.ReadAsStringAsync();
		}
	}
}
