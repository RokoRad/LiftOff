using LiftOff.API.Logic;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    
    [RoutePrefix("api/smartwatch")]
    public class SmartwatchController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        [Route("registerDevice")]
        public void RegisterDevice(JObject json)
        {
            var deviceID = (string)json["deviceID"];
            var token = (string)json["token"];

            SmartwatchPairer.Instance.RegisterMobileDevice(deviceID, token);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("getDeviceToken")]
        public object GetDeviceToken(JObject json)
        {
            var deviceID = (string)json["deviceID"];

            return new { token = SmartwatchPairer.Instance.GetRegisteredMobileDeviceToken(deviceID) };
        }
    }
}
