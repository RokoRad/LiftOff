using LiftOff.API.Data;
using LiftOff.API.Data.Repos;
using LiftOff.API.Models;
using Microsoft.AspNet.Identity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace LiftOff.API.Controllers
{
	//Controller zadužen za funkcionalnosti vezane specifično uz korisnikov račun
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

        private readonly LiftOffContext _liftOffContext = new LiftOffContext();

		//Funkcija koja registrira novog korisnika u bazu
		[AllowAnonymous]
		[Route("Register")]
		public async Task<IHttpActionResult> Register(User userModel)
		{
			IdentityResult result = await _authRepo.RegisterUser(userModel);

			if (result == null) return InternalServerError();
			if (!result.Succeeded) return BadRequest();
			else return Ok();
		}

		//Funkcija koja korisniku vraća njegove trenutne statistike
        [Authorize]
        [HttpGet]
        [Route("GetUserData")]
        public IHttpActionResult GetUserData()
        {
            var userId = User.Identity.GetUserId();

            var user = _liftOffContext.StatisticsUsers.First(usr => usr.IdentityUserId == userId);

            return Ok(user);
        }
    }
}
