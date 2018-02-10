using LiftOff.API.Data;
using LiftOff.API.Logic;
using LiftOff.API.Logic.Alexa;
using LiftOff.API.Models.Dynamic;
using LiftOff.API.Models.Persistent;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/flysafe")]
    public class FlySafeController : ApiController
    {
        #region Dependancy management

        private readonly LiftOffRepo _liftOffRepo;

        public FlySafeController()
        {
            _liftOffRepo = new LiftOffRepo();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _liftOffRepo.Dispose();
            }

            base.Dispose(disposing);
        }

        #endregion

        [HttpPost]
        [Authorize]
        [Route("get-rating")]
        public IHttpActionResult GetRating([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            WeatherRating rating = Weatherer.Instance.GetConditionsRating(timeLocation, null);

            return Ok(rating);
        }

        [HttpPost]
        [Authorize]
        [Route("get-rating-for-drone")]
        public IHttpActionResult GetRatingForDrone([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json["timeLocation"]));
            string droneName = (string)json["droneName"];

            Drone drone = _liftOffRepo.GetDroneByName(droneName);

            if (!timeLocation.TimeIsValid()) return BadRequest("time requested is not valid");
            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            WeatherRating rating = Weatherer.Instance.GetConditionsRating(timeLocation, drone);

            return Ok(rating);
        }

        [HttpPost]
        [Authorize]
        [Route("get-prognosis-for-location")]
        public IHttpActionResult GetPrognosisForLocation([FromBody]JObject json)
        {
            TimeLocation timeLocation = JsonConvert.DeserializeObject<TimeLocation>(JsonConvert.SerializeObject(json));

            if (!timeLocation.LocationIsValid()) return BadRequest("location requested is not valid");

            return Ok(Weatherer.Instance.GetPrognosisForLocation(timeLocation));
        }
        
        [HttpGet]
        [Authorize]
        [Route("get-drones")]
        public IHttpActionResult GetDrones()
        {
            return Ok(_liftOffRepo.GetDrones());
        }
    }
}
