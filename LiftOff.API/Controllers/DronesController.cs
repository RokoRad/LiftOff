using LiftOff.API.Data;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	//Controller zadužen za funkcionalnosti vezane za dronove
    [RoutePrefix("api/drones")]
    public class DronesController : ApiController
    {
        private readonly RepoBridge _repoBridge = new RepoBridge();

        //Ruta koja korisniku vraća listu svih dronova koji se nalaze u bazi
        [HttpGet]
        [Authorize]
        [Route("getDrones")]
        public IHttpActionResult GetDrones()
        {
            return Ok(_repoBridge.GetDrones());
        }
    }
}
