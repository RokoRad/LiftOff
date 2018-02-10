using LiftOff.API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/nofly")]
    public class NoFlyController : ApiController
    {
        #region Dependancy management

        private LiftOffRepo _liftOffRepo;

        public NoFlyController()
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

        [HttpGet]
        [AllowAnonymous]
        [Route("get-nofly-zones")]
        public IHttpActionResult GetNoFlyZones()
        { 
            return Ok(_liftOffRepo.GetNoFlyZones());
        }
    }
}
