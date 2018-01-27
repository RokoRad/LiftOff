using LiftOff.API.Data;
using System.Linq;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/drones")]
    public class DronesController : ApiController
    {
        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

        [Authorize]
        [HttpGet]
        [Route("getDrones")]
        public IHttpActionResult GetDrones()
        {
            return Ok(_liftOffContext.Drones.ToList());
        }
    }
}
