using LiftOff.API.Logic;
using LiftOff.API.Logic.SmartWatch;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    //Controller zaduzen za potrebe smartwatcha, odnosno spajanje LiftOff mobilne i smartwatch platforme korisnika
    [RoutePrefix("api/smartwatch")]
    public class SmartwatchController : ApiController
    {
        //Ruta za registriranje mobilnog uredaja
        [HttpPost]
        [AllowAnonymous]
        [Route("register-device")]
        public void RegisterDevice(JObject json)
        {
            var deviceID = (string)json["deviceID"];
            var token = (string)json["token"];
            var droneName = (string)json["droneName"];

            SmartwatchPairer.Instance.RegisterMobileDevice(deviceID, token, droneName);
        }

        //Ruta za dohvacanje potrebnih podataka o mobilnom uredaju za spajanje na smartwatchu
        [HttpPost]
        [AllowAnonymous]
        [Route("get-device-info")]
        public object GetDeviceInfo(JObject json)
        {
            var deviceID = (string)json["deviceID"];

            var deviceInfo = SmartwatchPairer.Instance.GetRegisteredMobileDeviceInfo(deviceID);

            return new { token = deviceInfo.Token, droneName = deviceInfo.DroneName };
        }
    }
}
