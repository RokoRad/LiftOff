using LiftOff.API.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http;
using LiftOff.API.Logic;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/weather")]
    public class WeatherController : ApiController
    {
        [AllowAnonymous]
        [HttpPost]
        [Route("getScore")]
        public IHttpActionResult GetScore([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            WeatherFetcher.Instance.AddTimeLocationToTrack(timeLocation);
            var wd = WeatherFetcher.Instance.GetStoredWeatherData(timeLocation);
            var wr = WeatherFetcher.Instance.getConditionsRating(wd);
            WeatherFetcher.Instance.RemoveTimeLocationFromTracking(timeLocation);

            return Ok(wr);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("getBestRatingNearMe")]
        public IHttpActionResult GetBestRatingNearMe([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            return Ok(WeatherFetcher.Instance.GetBestWeatherRatingNearLocation(timeLocation));
        }

        [Authorize]
        [HttpPost]
        [Route("getPrognosisForLocation")]
        public IHttpActionResult GetPrognosisForLocation([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            return Ok(WeatherFetcher.Instance.GetPrognosisForLocation(timeLocation));
        }
    }
}
