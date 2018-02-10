using LiftOff.API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    //Controller za nofly zone zabranjenog leta na planning karti
    [RoutePrefix("api/nofly")]
    public class NoFlyController : ApiController
    {
        //Potrebne konekcije na bazu i njihova inicijacija i odlaganje 
        #region Dependancy management

        private readonly LiftOffRepo _liftOffRepo;

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

        //Ruta za dohvacanje nofly zona
        [HttpGet]
        [Authorize]
        [Route("get-nofly-zones")]
        public IHttpActionResult GetNoFlyZones()
        { 
            return Ok(_liftOffRepo.GetNoFlyZones());
        }
    }
}
