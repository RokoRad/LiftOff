using LiftOff.API.Logic;
using Newtonsoft.Json.Linq;
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
            var droneName = (string)json["droneName"];

            SmartwatchPairer.Instance.RegisterMobileDevice(deviceID, token, droneName);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("getDeviceInfo")]
        public object GetDeviceInfo(JObject json)
        {
            var deviceID = (string)json["deviceID"];

            var deviceInfo = SmartwatchPairer.Instance.GetRegisteredMobileDeviceInfo(deviceID);

            return new { token = deviceInfo.Token, droneName = deviceInfo.DroneName };
        }
    }
}
