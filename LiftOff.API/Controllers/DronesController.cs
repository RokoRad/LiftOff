using LiftOff.API.Data;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	//Controller zadužen za funkcionalnosti vezane za dronove
    [RoutePrefix("api/drones")]
    public class DronesController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

		//Funkcija koja korisniku vraća listu svih dronova koji se nalaze u bazi
        [Authorize]
        [HttpGet]
        [Route("getDrones")]
        public IHttpActionResult GetDrones()
        {
            return Ok(_liftOffContext.Drones.ToList());
        }
    }
}
