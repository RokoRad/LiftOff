using LiftOff.API.Data.Repos;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        #region Dependancy management

        private AuthRepo _authRepo = null;
    
        public AccountController()
        {
            _authRepo = new AuthRepo();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _authRepo.Dispose();
            }

            base.Dispose(disposing);
        }

        #endregion


        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(User userModel)
        {
            IdentityResult result = await _authRepo.RegisterUser(userModel);

            if   (result == null)     return InternalServerError();
            if   (!result.Succeeded)  return BadRequest();
            else                      return Ok();
        }
        
    }
}
